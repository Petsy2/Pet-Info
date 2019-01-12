//require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.Promise = global.Promise;
//mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
mongoose.connect('mongodb://localhost/pets');

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

// .explain('executionStats')

const getPetById = (pet_id, cb) => {
    const query = Pet_Info.findOne({ pet_id: pet_id })
    query.exec()
        .then((err, pet) => {
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
