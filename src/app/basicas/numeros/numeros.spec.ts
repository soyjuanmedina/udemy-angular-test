import { incrementar } from "./numeros";

describe('Pruebas de numeros', () => {

  it('Debe de regresar 100 si el numero es mayor de 100', () => {
    const respuesta = incrementar(150);
    expect(respuesta).toBe(100);
  });

  it('Debe de regresar numero más 1 si el numero es menor de 100', () => {
    const respuesta = incrementar(50);
    expect(respuesta).toBe(51);
  });


});