import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterOutlet, RouterLinkWithHref } from '@angular/router';
import { By } from '@angular/platform-browser';

import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent],
      imports: [RouterTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de tener un link a la página médicos', () => {


    const elementos = fixture.debugElement.queryAll(By.directive(RouterLinkWithHref));

    console.log(fixture);

    let existe = false;

    for (const elemento of elementos) {
      if (elemento.attributes['routerLink'] === '/medicos') {
        existe = true;
      }
    }

    expect(existe).toBeTruthy();

  });

});
