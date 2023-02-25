const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app); //Ele básicamente faz o que o listen faz, por isso precisa seprar o server do app

test('A aplicação deve responder na porta 3000', async () => {
    return request.get('/').then(res => {
        let status = res.statusCode;
        expect(status).toEqual(200);
    })
})