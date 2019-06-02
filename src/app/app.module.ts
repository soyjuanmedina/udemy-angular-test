import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { MedicoService } from './intermedio2/medico/medico.service';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { NavbarComponent } from './avanzado/navbar/navbar.component';
import { RouterMedicoComponent } from './avanzado/router-medico/router-medico.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicoComponent,
    HospitalComponent,
    NavbarComponent,
    RouterMedicoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MedicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
