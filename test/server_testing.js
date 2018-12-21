const request = require('supertest')
const bodyParser = require('body-parser')
const model = require('../database/models/Pet_Info.js')
const express = require('express')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

describe('Server', () => {
  before(() => {
    const server = require('../server/server.js')
  })

  after(() => {
    server.close()
  })
})

describe('GET /api/info', () => {
  it('Should respond with an object', done => {
    request(app)
      .get('/api/info')
      .send({ "pet_id": "1111" })
      .expect((res) => {
        typeof res.body === 'object'
      })
      .end((err, res) => {
        if (err) {
          console.log('ERROR in test GET /api/info')
        }
      }, done)
  })
})
