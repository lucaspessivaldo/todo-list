const request = require('supertest')
const app = require('../src/app')

describe('POST /api/register', () => {

  it('do not send password', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'test@email.com'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Password is required"
    })
  })

  it('do not send name', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      email: 'test@email.com',
      password: '123456'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Name is required"
    })
  })

  it('do not send email', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      password: '123456'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Email is required"
    })
  })

  it('password just numbers', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'test@email.com',
      password: '123456789'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Password - invalid"
    })
  })

  it('password just letters', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'test@email.com',
      password: 'abcdefghij'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Password - invalid"
    })
  })

  it('password lowercase', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'test@email.com',
      password: 'a15def8ghij'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Password - invalid"
    })
  })

  it('password uppercase', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'test@email.com',
      password: 'AS1BJ45FGHF'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Password - invalid"
    })
  })

  it('invalid email', () => {
    return request(app)
    .post('/api/register')
    .expect("Content-Type", /json/)
    .send({
      name: 'test',
      email: 'testemail.com',
      password: 'a5c12Def5ij'
    })
    .expect(400)
    .expect({
        "success": false,
        "data": {},
        "message": "Email - invalid"
    })
  })

})