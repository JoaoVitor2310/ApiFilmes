const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Cadastro de usuário', () => {
    test('Deve cadastrar um usuário com sucesso', () => {
        // let time = Date.now();
        // let email = `${time}@gmail.com`;
        email = 'joaovitormatosgouveia@gmail.com';

        let user = {name: 'João Vitor', email, password: '1234567', topMovies: ['interstellar', 'top gun: maverick', 'homem aranha 2'], watchList: ['avengers', 'joker', 'la la land']};

        return request.post('/api/users/register')
            .send(user)
            .then(res => {
                expect(res.statusCode).toEqual(200);
                expect(res.body.email).toEqual(email);
            })
            .catch(error => {
                console.log(error);
            })
    })
})



//joaovitormatosgouveia@gmail.com