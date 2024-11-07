import * as areas from "./areas.js";
import * as chai from 'chai';
//import assert from 'node:assert';
import test from 'node:test';

test('Si mando un 2, el cuadrado debe ser 4', () => {
    let resultado = areas.areaCuadrado(2);
    chai.assert.typeOf(resultado,'number');
    chai.assert.equal(resultado,4);
    chai.expect(resultado).to.be.a('number');
});