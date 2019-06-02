import { obtnerRobots } from "./arrays";


describe('Pruebas de arrays', () => {

  it('Debe de retornar al menos 3 robots', () => {
    const respuesta = obtnerRobots();
    expect(respuesta.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir MegaMan y Ultron', () => {
    const respuesta = obtnerRobots();
    expect(respuesta).toContain('MegaMan');
    expect(respuesta).toContain('Ultron');
  });

});