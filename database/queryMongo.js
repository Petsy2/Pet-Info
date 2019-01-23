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


// const getUserById = (id, callback) => {
//     userInfo.findOne({ user_id: id }).exec()
//         .then((error, result) => {
//             if (error) {
//                 callback(error);
//             } else {
//                 callback(result);
//             }
//         })
// }

// const getUserByName = (name, callback) => {
//     userInfo.findOne({ first_name: name }).exec()
//         .then((error, result) => {
//             if (error) {
//                 callback(error);
//             } else {
//                 callback(result);
//             }
//         })
// }




//const disconnect = mongoose.disconnect()

