const request = require('supertest')
const app = require('../src/app')

//Test api status
describe('GET /', () => {
  it('server is running', async () => {
    const res = await request(app).get('/')
    expect(res.statusCode).toEqual(200)
    expect(res.body).toEqual({"success": true})
  })
})
