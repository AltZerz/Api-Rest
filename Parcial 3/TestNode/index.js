import * as areas from "./areas.js";
import assert from 'node:assert';
import test from 'node:test';

test('Si mando 2, debe regresar 4', () => {
    let resultado = areas.areaCuadrado(2);
    assert.strictEqual(resultado,4);
});