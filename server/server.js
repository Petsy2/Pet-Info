const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/index.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/api/info', (req, res) => {
    //extract pet_id from request
    let pet_id = req.body.pet_id;

    //call db.getPetById(pet_id);
    db.getPetById(pet_id, (petInfo) => {
        res.send(petInfo)
    })

    //send response with pet info to client
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`listening on port ${port}`) });