const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/users', {
    useNewUrlParser: true,
    connectTimeoutMS: 3600000,
    socketTimeoutMS: 3600000,
    keepAlive: 1
});
mongoose.set('useCreateIndex', true);


const userSchema = mongoose.Schema({
    //id: { type: Number, unique: true },
    id: Number,
    first_name: String,
    last_name: String,
    job_description: String,
    image_url: String
}, { collection: 'info' })

const userInfo = mongoose.model('info', userSchema);

const getUserById = id => {
    return userInfo.findOne({ id: id }).exec()
}

const getUserByFullName = name => {
    const first = name.split(' ')[0];
    const last = name.split(' ')[1];
    return userInfo.findOne({ first_name: first, last_name: last }).exec();
}

const getUserByJob = job => {
    return userInfo.findOne({ job_description: job }).exec();
}

const getAllUsersByName = name => {
    const first = name.split(' ')[0];
    const last = name.split(' ')[1];
    return userInfo.find({ first_name: first, last_name: last }).exec();
}

const getAllUsersByJob = job => {
    return userInfo.find({ job_description: job }).exec();
}

module.exports = {
    userInfo,
    getUserById,
    getUserByFullName,
    getUserByJob,
    getAllUsersByName,
    getAllUsersByJob,
    mongoose
}



// //require('dotenv').config();
// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
// //mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true });
// mongoose.connect('mongodb://localhost/pets');
// //mongoose.connect('mongodb://localhost/users');

// const petsySchema = mongoose.Schema({
//     pet_id: {
//         type: Number,
//         unique: true
//     },
//     genus: String,
//     species: String,
//     description: String,
//     image_url: String
// }, { collection: 'Pet_Info' })

// const Pet_Info = mongoose.model('Pet_Info', petsySchema);

// // .explain('executionStats')

// const getPetById = (pet_id, cb) => {
//     const query = Pet_Info.findOne({ pet_id: pet_id })
//     query.exec()
//         .then((err, pet) => {
//             if (err) {
//                 cb(err);
//             } else {
//                 cb(pet);
//             }
//         })
// }

// module.exports = {
//     Pet_Info,
//     getPetById
// }
