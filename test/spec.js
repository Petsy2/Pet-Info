const mocha = require('mocha')
const assert = require('assert');
const chai = require('chai')
const chaiHttp = require('chai-http');
const expect = chai.expect
const should = chai.should();
const server = require('../db/index')

chai.use(chaiHttp);

const random = num => {
    return Math.floor(Math.random() * (num + 1));
}

it('should respond with 200 status for /users:id GET request', function (done) {
    const id = random(10000000)
    chai.request(server)
        .get('/users/' + id)
        .end(function (err, res) {
            res.should.have.status(200);
            done();
        });
});

it('should respond with 404 status for routes that don\'t exist', function (done) {
    chai.request(server)
        .get('/non-existent-route')
        .end(function (err, res) {
            res.should.have.status(404);
            done();
        })
})

it('should list a single user for /users:id GET request', function (done) {
    chai.request(server)
        .get('/users/42')
        .end(function (err, res) {
            expect(res.body).to.deep.equal({
                id: 42,
                first_name: 'Ernestina',
                last_name: 'Baumbach',
                job_description: 'Principal Technician',
                image_url: 'http://lorempixel.com/640/480'
            })
            done();
        })
})
