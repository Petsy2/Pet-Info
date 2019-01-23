const { Pool } = require('pg')
// //require('dotenv').config()

const pool = new Pool({
    database: process.env.DB_NAME || 'users',
    host: process.env.DB_HOST || '127.0.0.1',
    user: process.env.DB_USER || 'student',
    password: process.env.DB_PASSWORD || 'student'
})

const knex = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'student',
        password: 'student',
        database: 'users'
    }
});

//module.exports = knex;

//console.log(knex)

module.exports = {
    query: (text, params, callback) => {
        return pool.query(text, params, callback)
    },
    pool,
    knex
}