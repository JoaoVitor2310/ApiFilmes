const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);

let user = { name: 'João Vitor', email: 'joaovitormatosgouveia@gmail.com', password: '1234567', confirmPassword: '1234567' };

afterAll(() => {
    //Deleta o usuário criado pros testes de registro.
    return request.delete(`/api/users/deleteuser/${user.email}`)
                .then(res => {});
    })

describe('Cadastro de usuário', () => {
    test('Deve cadastrar um usuário novo com sucesso', () => {

    //     // topMovies: ['interstellar', 'top gun: maverick', 'homem aranha 2'], watchList: ['avengers', 'joker', 'la la land'
        

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
        
        return request.post('/api/users/register')
            .send(user)
            .then(res => {
                // console.log(res.body.errors);
                expect(res.statusCode).toEqual(422);
                // expect(res.body._id).toEqual(user.email);
            })
    })
})

describe('Autenticação', () => {
    test('Deve garantir que será retornado um token quando o login for realizado.', () => {
        return request.post('/api/users/login')
                    .send({email: user.email,password: user.password})
                    .then(res => {
                        expect(res.statusCode).toEqual(200);
                        expect(res.body._id).toBeDefined();
                        expect(res.body.token).toBeDefined();
                    })
    })

    test('Deve impedir que um usuério consiga logar com um email não cadastrado.', () => {
        return request.post('/api/users/login')
                    .send({email: user.email + 'semCadastro', password: '1234567'})
                    .then(res => {
                        expect(res.statusCode).toEqual(422);
                    })
    })
})