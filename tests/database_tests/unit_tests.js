const mongoose = require('mongoose');
mongoose.Promise = global.Promise
const model = require('../../database/models/Pet_Info.js')
const chai = require('chai');
const expect = chai.expect;


mongoose.connect('mongodb://localhost/petsy');
const dbServer = mongoose.connection;
dbServer.on('error', console.log("ERROR CONNECTING TO TEST DB: "))
    .once('open', () => {
        console.log('Connected to database for testing')
    });

beforeEach((done) => {
    dbServer.connection.collections.Pet_Info.drop(() => {
        done();
    });
});

describe('Test database', () => {
    it('Creates a pet', (done) => {
        let testPet = new model.Pet_Info({
            "pet_id": "99999",
            "class": "mammal",
            "family": "Felidae",
            "genus": "Panthera",
            "species": "Cat-in-the-Hat",
            "description": "Terrible with children. Has really annoying friends."
        });
        testPet.save()
            .then(() => done());
    });
})




