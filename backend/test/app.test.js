const request = require('supertest')
const app = require('../app')

//Test api status
describe('GET /', () => {
  it('server is running', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({"success": true})
  })
})

//Test register 
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
})

//Test login
describe('POST /api/login', () => {

})

//Test todo dashboard
describe('POST /api/dashboard', () => {

})