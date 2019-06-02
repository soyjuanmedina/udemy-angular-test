import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { of, empty, throwError } from 'rxjs';

describe('MedicosComponent', () => {

  let componente: MedicosComponent;
  const servicio = new MedicosService(null);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });


  it('Init: Debe de cargar los médicos', () => {

    const medicos = ['medico 1', 'medico 2', 'medico 3']

    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return of(medicos)
    })

  });

  it('Debe de llamar al servidor para agregar un médico', () => {

    const espia = spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return empty();
    })
    componente.agregarMedico();

    expect(espia).toHaveBeenCalled();
  });


  it('Debe de agregar un nuevo medico al array de médicos', () => {

    const medico = { id: 1, nombre: 'andres' };
    spyOn(servicio, 'agregarMedico').and.callFake(() => {
      return of(medico)
    })
    componente.agregarMedico();

    expect(componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);
  });

  it('Si falla la adicción, la propiedad mensajeError debe ser igual al error del servicio', () => {

    const miError = 'No se pudo agregar el médico';
    spyOn(servicio, 'agregarMedico').and.returnValue(throwError(miError));
    componente.agregarMedico();

    expect(componente.mensajeError).toBe(miError);
  });

  it('Debe llamar al servidor para borrar medico', () => {

    const miError = 'No se pudo agregar el médico';
    spyOn(window, 'confirm').and.returnValue(true);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty);
    componente.borrarMedico('1');

    expect(espia).toHaveBeenCalledWith('1');
  });


  it('No Debe llamar al servidor para borrar medico', () => {

    const miError = 'No se pudo agregar el médico';
    spyOn(window, 'confirm').and.returnValue(false);
    const espia = spyOn(servicio, 'borrarMedico').and.returnValue(empty);
    componente.borrarMedico('1');

    expect(espia).not.toHaveBeenCalledWith('1');
  });


});
