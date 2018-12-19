const mongoose = require('mongoose');
const data = require('./data.js');
mongoose.connect('mongodb://localhost/petsy');

let petsySchema = mongoose.Schema({
    pet_id: {
        type: Number,
        unique: true
    },
    type: String,
    subtype: String,
    description: String,
    image_url: String
}, { collection: 'Pet_Info' })

let Pet_Info = mongoose.model('Pet_Info', petsySchema);


const Seed = (pets) => {
    for (let pet of pets) {
        const newDoc = new Pet_Info({
            pet_id: pet.pet_id,
            type: pet.type,
            subtype: pet.subtype,
            description: pet.description,
            image_url: pet.image_url
        });

        Pet_Info.create(newDoc, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
            }
        })
    }
}

Seed(data);


