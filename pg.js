const { knex } = require('./knex')
const db = require('./db/postgres')

const random = num => {
    return Math.floor(Math.random() * (num + 1));
}

///// KNEX /////

const makeSingleKnexQuery = async (id) => {
    await knex.select().from('info').where('id', '=', id)
    // .then()
    // .catch(error => console.log('error', error))
}

const makeManyKnexQueries = async (stop) => {
    while (stop--)
        await makeSingleKnexQuery(random(9999999));
}

const testKnexQueries = async (amount) => {
    console.log('TESTING KNEX QUERIES')
    const before = await new Date().getTime()
    await makeManyKnexQueries(amount);
    const after = await new Date().getTime();
    const duration = ((after - before) / 1000);
    console.log('Total duration for', amount, 'KNEX queries:', duration, 'seconds');
    knex.destroy();
}

///// RAW QUERIES /////

const makeSingleQuery = (id) => {
    db.query('SELECT * FROM info WHERE id = ' + id, (error, result) => {
        if (error) console.log('[ERROR making single query]', error.routine);
    })
}

const makeManyQueries = async (stop) => {
    while (stop--) {
        await makeSingleQuery(random(9999999))
    }
}

const testQueries = async (amount) => {
    console.log('TESTING RAW QUERIES')
    const before = await new Date().getTime()
    await makeManyQueries(amount);
    await db.pool.end();
    const after = await new Date().getTime();
    const duration = ((after - before) / 1000);
    console.log('Total duration of', amount, 'RAW queries:', duration, 'seconds');
}

const compare = async () => {
    await testQueries(20);
    await testKnexQueries(20)
}

compare()

