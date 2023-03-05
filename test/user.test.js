const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

const userForTests = {name: 'João Vitor', email: 'joaovitormatosgou@gmail.com', password: '1234567', confirmPassword: '1234567'}

// beforeAll(() => {
//     console.log('Jay11');
// })


describe('Cadastro de usuário', () => {
    test('Deve cadastrar um usuário novo com sucesso', () => {

        // topMovies: ['interstellar', 'top gun: maverick', 'homem aranha 2'], watchList: ['avengers', 'joker', 'la la land'
        let user = { name: 'João Vitor', email: 'joaovitormatosgou@gmail.com', password: '1234567', confirmPassword: '1234567' };

        return request.post('/api/users/register')
            .send(user)
            .then(res => {
                // console.log(res.body.errors);
                expect(res.statusCode).toEqual(201);
                expect(res.body.token).toBeDefined();
                expect(res.body._id).toBeDefined();
            })
    })

    test('Deve impedir que o usuário cadastre um email repetido.', () => {
        let user = { name: 'João Vitor', email: 'joaovitormatosgouveia@gmail.com', password: '1234567', confirmPassword: '1234567' };

        return request.post('/api/users/register')
            .send(user)
            .then(res => {
                // console.log(res.body.errors);
                expect(res.statusCode).toEqual(201);

                return request.post('/api/users/register')
                    .send(user)
                    .then(res => {
                        expect(res.statusCode).toEqual(422);
                        console.log(res.body.errors);
                        // expect(res.body._id).toEqual(user.email);

                    })

            })
    })
})



//joaovitormatosgouveia@gmail.com