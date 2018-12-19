const express = require('express');
const bodyParser = require('body-parser')
const db = require('../database/index.js')
const app = express();

app.use(bodyParser.json());

app.get('api/info', (req, res) => {
    //extract pet_id from request
    //call db.getPetById(pet_id);
    //send response with pet info to client
});

const port = process.env.PORT || 3000;

app.listen(port, () => { console.log(`listening on port ${port}`) });