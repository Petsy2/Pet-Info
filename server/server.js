const express = require('express');
const postgres = require('./postgres');
const mongo = require('../db/queryMongo')

const app = express();
const port = process.env.PORT || 3000;

const random = num => {
  return Math.floor(Math.random() * (num + 1));
}

async function sendManyQueries(start, stop) {
  const data = [];
  for (let i = start; i < stop; i++) {
    await postgres.query('SELECT * FROM info WHERE id = ' + random(10000000), (error, result) => {
      if (error) {
        console.log('ERROR querying many', error);
      } else {
        console.log(i)
        data.push(i);
      }
    })
  }
  //console.log(data);
  return data;
}

// const h = sendManyQueries(0, 10);
// console.log(h)

app.get('/users/:id', (req, res, next) => {
  console.log(req.params, req.url)
  postgres.query('SELECT * FROM info where id = ' + req.params.id, (err, result) => {
    if (err) {
      console.log('error', err)
      return next(err)
    } else {
      console.log('success querying users database')
      res.send(result.rows[0]);
    }
  })
})

app.get('/api/info/:user_id', (req, res) => {
  mongo.getUserById(req.params.user_id, userInfo => {
    if (userInfo) {
      res.status(200).send(userInfo);
    } else {
      res.status(500).send('ERROR: user does not exist')
    }
  })
});



app.get('/api/test', (req, res, next) => {
  //sendManyQueries(0, 10)
  // const before = new Date().getTime();
  // const after = new Date().getTime();
  // console.log('Total time for queries', (after - before) / 1000, 'seconds')
})



// app.get("/api/info/:user_id", (req, res, next) => {
//     console.log("req in service GET: ", req.params.user_id);
//     mongo.getUserById(req.params.user_id, userInfo => {
//         if (userInfo) {
//             res.status(200).send(userInfo);
//             // } else {
//             //     return next()
//         }
//     });
// });

// app.get('/users/name/:username', (req, res, next) => {
//     console.log(req.params, req.url);
//     mongo.getUserByName(req.params.username, (error, result) => {
//         if (error) {
//             console.log('ERROR with Mongo query', error);
//             return next(error);
//         } else {
//             console.log('SUCCESS with Mongo query', error);
//             //res.send(result)
//         }
//     })
// })



module.exports = app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});




// const express = require("express");
// const bodyParser = require("body-parser");
// const model = require("../database/models/Pet_Info.js");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.get("/api/info/:pet_id", (req, res) => {
//   // extract pet_id from request
//   let pet_id = req.params.pet_id;
//   console.log("req in service GET: ", req.params.pet_id);

//   // call model.getPetById(pet_id);
//   model.getPetById(pet_id, petInfo => {
//     // send response with pet info to client
//     res.status(200).send(petInfo);
//   });
// });

// const port = 3000;

// let server = app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });

// module.exports = server;


