import { mensaje } from "./string";
import { resetApplicationState } from "@angular/core/src/render3/instructions";
import { type } from "os";

// describe('Pruebas de string');
// it('Debe de regresar un string');


describe('Pruebas de string', () => {

  it('Debe de regresar un string', () => {
    const respuesta = mensaje('Juan')
    expect(typeof respuesta).toBe('string');
  });

  it('Debe de retornar un saludo con el nombre que se envia', () => {
    const nombre = 'Juan';
    const respuesta = mensaje(nombre)
    expect(respuesta).toContain(nombre);
  });

});