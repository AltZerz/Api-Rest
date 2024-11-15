const request = require('supertest');
const url = 'http://localhost:3000'

describe('Conjunto de pruebas', () => {
    it('Revisar que el servidor me devuelva un 200', () => {
        request(url)
            .get('/')
            .end(function(err, res){
                expect(res.statusCode).toBe(200);
            });
    });
});
