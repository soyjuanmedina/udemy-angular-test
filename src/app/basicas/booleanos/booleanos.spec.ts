import { usuarioLogueado } from "./booleanos";


describe('Pruebas de booleanos', () => {

  it('Debe de regresar true', () => {
    const respuesta = usuarioLogueado();
    expect(respuesta).toBeTruthy();
  });
});