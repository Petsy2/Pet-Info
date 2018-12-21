const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/petsy', { useNewUrlParser: true });

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
