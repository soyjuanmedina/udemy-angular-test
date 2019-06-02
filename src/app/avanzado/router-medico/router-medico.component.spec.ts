import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

import { RouterMedicoComponent } from './router-medico.component';


class FakeRouter {
  navigate(params) { }
}

class FakeActivatedRoute {
  // params: Observable<any> = Observable.empty();

  private subject = new Subject();

  push(valor) {
    this.subject.next(valor);
  }

  get params() {
    return this.subject.asObservable();
  }

}


describe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de redireccionar a Médico cuando se guarde', () => {

    const router = TestBed.get(Router);
    const spy = spyOn(router, 'navigate');

    component.guardarMedico();

    expect(spy).toHaveBeenCalledWith(['medico', '123']);


  });

  it('Debe de colocar el id = nuevo', () => {

    component = fixture.componentInstance;

    const activatedRoute: FakeActivatedRoute = TestBed.get(ActivatedRoute);

    activatedRoute.push({ id: 'nuevo' });

    expect(component.id).toBe('nuevo');


  });

});
