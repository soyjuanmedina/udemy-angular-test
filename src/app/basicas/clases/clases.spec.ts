import { Jugador } from "./clases";

describe('Prueba de clases', () => {

  let jugador = new Jugador();

  beforeEach(function () {
    jugador = new Jugador();
  });


  it('Debe devolver 80 si recibe 20 de daño', () => {
    const respuesta = jugador.recibeDanio(20);
    expect(respuesta).toBe(80);
  });

  it('Debe devolver 50 si recibe 50 de daño', () => {
    const respuesta = jugador.recibeDanio(50);
    expect(respuesta).toBe(50);
  });

  it('Debe devolver 0 si recibe 100 o más de daño', () => {
    const respuesta = jugador.recibeDanio(101);
    expect(respuesta).toBe(0);
  });

});