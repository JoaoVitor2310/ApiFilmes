const app = require('../src/app.ts');
const supertest = require('supertest');
const request = supertest(app)

test('A aplicação deve responder na porta 3000', () => {
    return request.get('/').then(res => {
        let status = res.statusCode;
        expect(status).toEqual(200);
    }).catch(e => {
        console.log(e);
    })
})