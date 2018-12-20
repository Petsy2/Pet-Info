const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/petsy');

const petsySchema = mongoose.Schema({
    pet_id: {
        type: Number,
        unique: true
    },
    genus: String,
    species: String,
    description: String,
    image_url: String
}, { collection: 'Pet_Info' })

const Pet_Info = mongoose.model('Pet_Info', petsySchema);


// const Seed = (pets) => {
//     for (let pet of pets) {


//         const newDoc = new Pet_Info({
//             pet_id: pet.pet_id,
//             genus: pet.genus,
//             species: pet.species,
//             description: pet.description,
//             // image_url: pet.image_url
//         });

//         Pet_Info.create(newDoc, (err, result) => {
//             if (err) {
//                 console.log(err);
//             } else {
//                 console.log(result);
//             }
//         })
//     }
// }

// Seed(data);


const getPetById = (pet_id, cb) => {
    const query = Pet_Info.findOne({ pet_id: pet_id })
    query.exec((err, pet) => {
        if (err) {
            cb(err);
        } else {
            cb(pet);
        }
    })
}

module.exports = {
    Pet_Info,
    getPetById
}
