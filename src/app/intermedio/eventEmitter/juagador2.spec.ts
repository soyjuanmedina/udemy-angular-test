import { Jugador2 } from "./jugador2";

describe('Jugador2 emit', () => {

  let jugador = new Jugador2();

  beforeEach(function () {
    jugador = new Jugador2();
  });


  it('Debe emitir algo cuando recibe daño', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(1000);

    expect(nuevoHP).toBe(0);

  });

  it('Debe sobrevivir si recibe menos de 100 de daño', () => {

    let nuevoHP = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHP = hp;
    });

    jugador.recibeDanio(50);

    expect(nuevoHP).toBe(50);

  });

});