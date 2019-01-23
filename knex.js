const pg = require('pg');
const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'student',
        password: 'student',
        database: 'users'
    }
});

module.exports = { pg, knex }


// knex.select().from('info').where('id', '<', 'd')
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error))
//     .finally(() => knex.destroy())