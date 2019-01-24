const mongo = require('./database/queryMongo');

const random = n => {
    return Math.floor(Math.random() * (n + 1))
}

const singleQuery = (type, params) => {
    let result;
    switch (type) {
        case 'id':
            result = mongo.getUserById(params);
            break;
        case 'job':
            result = mongo.getUserByJob(params);
            break;
        case 'name':
            result = mongo.getUserByFullName(params);
            break;
        default:
            result = 'Incorrect parameters passed to function';
    }
    return result;
}

const multipleQueries = (type, params) => {
    let result;
    switch (type) {
        case 'job':
            result = mongo.getAllUsersByJob(params);
            break;
        case 'name':
            result = mongo.getAllUsersByName(params);
            break;
        default:
            result = 'Incorrect parameters passed to function';
    }
    return result;
}

const testSingleQueryTime = async (type, params) => {
    const before = new Date().getTime();
    await singleQuery(type, params);
    const after = new Date().getTime();
    console.log((after - before) / 1000 + '\tID: ' + params);
}

const testMultipleQueryTime = async (type, params) => {
    const before = new Date().getTime();
    await multipleQueries(type, params);
    const after = new Date().getTime();
    console.log('Multiple', type, 'queries:\t', (after - before) / 1000, 'seconds');
}

const runTest = async () => {
    await console.log('Testing single query');
    await testSingleQueryTime('id', 0);
    await testSingleQueryTime('id', 10);
    await testSingleQueryTime('id', 50);
    await testSingleQueryTime('id', 100);
    await testSingleQueryTime('id', 200);
    await testSingleQueryTime('id', 500);
    await testSingleQueryTime('id', 1000);
    await testSingleQueryTime('id', 5000);
    await testSingleQueryTime('id', 10000);
    await testSingleQueryTime('id', 50000);
    await testSingleQueryTime('id', 100000);
    await testSingleQueryTime('id', 200000);
    await testSingleQueryTime('id', 300000);
    await testSingleQueryTime('id', 400000);
    await testSingleQueryTime('id', 500000);
    await testSingleQueryTime('id', 600000);
    await testSingleQueryTime('id', 700000);
    await testSingleQueryTime('id', 800000);
    await testSingleQueryTime('id', 900000);
    await testSingleQueryTime('id', 1000000);
    await testSingleQueryTime('id', 2000000);
    await testSingleQueryTime('id', 3000000);
    await testSingleQueryTime('id', 4000000);
    await testSingleQueryTime('id', 5000000);
    await testSingleQueryTime('id', 6000000);
    await testSingleQueryTime('id', 7000000);
    await testSingleQueryTime('id', 8000000);
    await testSingleQueryTime('id', 9000000);
    await testSingleQueryTime('id', 9999999);
    await mongo.mongoose.disconnect();
}
/////////////////////////////////////////
// Calculate the percentage of change: //
///// (oldTime - newTime) / newTime /////
/////////////////////////////////////////

/*
var oldTime = 6.325;
var newTime = 0.002;

var decrease = oldTime - newTime;
var change = decrease / oldTime * 100;
console.log(change)
*/

runTest();





