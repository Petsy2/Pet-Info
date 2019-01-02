const request = require('supertest')
const expect = require('chai').expect
const bodyParser = require('body-parser')
const express = require('express')
const app = require("../server/server.js");

// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))

// describe('Server', () => {
//   before(() => {
//     const server = require('../server/server.js')
//   })

//   after(() => {
//     server.close()
//   })
// })

describe('GET /api/info', () => {
  it('Should respond with an object', done => {
    request(app)
      .get('/api/info')
      .set({ "pet_id": "1111" })
      .then((res) => {
        expect(res.body).to.be.an('object');
        done();
      })
      .catch((err) => {
        console.log("ERROR in GET /api/info test")
      })
  })
})

describe('GET /api/info', () => {
  it('Should respond with the pet species', done => {
    request(app)
      .get('/api/info')
      .set({ "pet_id": "1112" })
      .then((res) => {
        console.log("res.body: ", res.body)
        expect(res.body.species).to.equal('Lion');
        done();
      })
      .catch((err) => {
        console.log('ERROR in GET /api/info test: species name')
      })
  })
})
