const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const assert = require('assert');

mongoose.connect('mongodb://localhost:27017/petsyTESTS', { useNewUrlParser: true });

const testSchema = mongoose.Schema({
    pet_id: {
        type: Number,
        unique: true
    },
    genus: String,
    species: String,
    description: String,
    image_url: String
}, { collection: 'Pet_Info_TEST' })

const Pet_Info_TEST = mongoose.model('Pet_Info_TEST', testSchema);

mongoose.connection
    .on('error', (error) => {
        console.log('ERROR connecting to database')
    })
    .once('open', () => {
        console.log("Connected to database for testing");
    });



//before each 'done' call, clear the database    
beforeEach((done) => {
    mongoose.connection.collections.Pet_Info_TEST.drop(() => {
        done(); //after dropping the Pet_Info collection, move to the next test.
    });
})

describe('Creating a new document', () => {
    it('Creates a new pet', (done) => {
        //create a new pet
        const Pet = new Pet_Info_TEST({
            pet_id: 9999
        })
        //save pet to database
        Pet.save()
            .then(() => {
                assert(!Pet.isNew); //if the pet is saved to the database, it is not new
                done();
            })
            .catch((error) => { console.log('ERROR in database create doc test.', error) })
    })
});


beforeEach((done) => {
    let Pet = new Pet_Info_TEST({
        pet_id: 7777,
        genus: 'dogo',
        species: 'doj',
        description: '10 out of 10 good boy.'
    });
    Pet.save() // save new Pet
        .then(() => {
            done()
        }) //go to next step
        .catch((error) => {
            console.log('ERROR on document creation in read doc test', error)
            done()
        })
});

describe('Reading Pet info', () => {
    it('Finds a Pet description given the pet_id', (done) => {
        Pet_Info_TEST.findOne({ pet_id: 7777 }).exec()
            .then((pet) => {
                assert(pet.description === '10 out of 10 good boy.');
                done();
            })
            .catch((error) => { console.log('ERROR in database read document test.', error) })
    })
})
