const request = require('supertest');
const expect = require('chai').expect;
const app = require("../server/server.js");

//console.log(app)

describe('GET /api/info', () => {
  it('Should respond with an object', done => {
    request(app)
      .get('/api/info')
      .set({ "pet_id": "1111" })
      .then((res) => {
        expect(res.body).to.be.an('array');
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
