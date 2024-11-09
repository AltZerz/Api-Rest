const { areaCuadrado } = require('./areas.js');

jest.mock('./areas.js', () => ({
    areaCuadrado: jest.fn()
}));

test('Si mando un 2, el cuadrado debe ser 4', () => {
    areaCuadrado.mockReturnValue(4);

    let resultado = areaCuadrado(2);

    expect(areaCuadrado).toHaveBeenCalledWith(2);
    expect(resultado).toBe(4);
    expect(typeof resultado).toBe('number');
});
