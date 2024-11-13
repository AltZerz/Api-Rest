// test.index.js
const chai = require('chai');
const app = require('../index'); // Asegúrate de que la ruta sea correcta

const { expect } = chai;

(async () => {
    const chaiHttp = await import('chai-http');
    chai.use(chaiHttp.default);

    // Pruebas con Mocha y Chai
    describe('Pruebas del servidor Express', () => {
        // Prueba para la ruta GET
        it('Debería responder con un mensaje en la ruta GET /', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.text).to.equal('Servidor express escuchando petición GET');
                    done();
                });
        });

        // Prueba para la ruta POST
        it('Debería responder con un mensaje en la ruta POST /', (done) => {
            chai.request(app)
                .post('/')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    done();
                });
        });
    });
})();