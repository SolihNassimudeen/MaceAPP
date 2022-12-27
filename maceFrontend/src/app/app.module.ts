import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Login/login/login.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { HomeComponent } from './Admin/computerScienceAdmin/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CsfirstYearComponent } from './Admin/computerScienceAdmin/csfirst-year/csfirst-year.component';
import { CssecondYearComponent } from './Admin/computerScienceAdmin/cssecond-year/cssecond-year.component';
import { CsthirdYearComponent } from './Admin/computerScienceAdmin/csthird-year/csthird-year.component';
import { CsfourthYearComponent } from './Admin/computerScienceAdmin/csfourth-year/csfourth-year.component';
import { CiviladmHomeComponent } from './Admin/civilEngineering/civiladm-home/civiladm-home.component';
import { CiviladmFirstyearComponent } from './Admin/civilEngineering/civiladm-firstyear/civiladm-firstyear.component';
import { CiviladmSecondyearComponent } from './Admin/civilEngineering/civiladm-secondyear/civiladm-secondyear.component';
import { CiviladmThirdyearComponent } from './Admin/civilEngineering/civiladm-thirdyear/civiladm-thirdyear.component';
import { CiviladmFourthyearComponent } from './Admin/civilEngineering/civiladm-fourthyear/civiladm-fourthyear.component';
import { MechadmHomeComponent } from './Admin/mechanicalEngineering/mechadm-home/mechadm-home.component';
import { MechadmFirstyearComponent } from './Admin/mechanicalEngineering/mechadm-firstyear/mechadm-firstyear.component';
import { MechadmSecondyearComponent } from './Admin/mechanicalEngineering/mechadm-secondyear/mechadm-secondyear.component';
import { MechadmThirdyearComponent } from './Admin/mechanicalEngineering/mechadm-thirdyear/mechadm-thirdyear.component';
import { MechadmFourthyearComponent } from './Admin/mechanicalEngineering/mechadm-fourthyear/mechadm-fourthyear.component';
import { AdminaddDeleteComponent } from './Admin/AdminAddandDelete/adminadd-delete/adminadd-delete.component';
import { ChangepasswordComponent } from './Admin/changepassword/changepassword.component';
import { CivilfacultyhomeComponent } from './Faculty/CivilFaculty/CivilHome/civilfacultyhome/civilfacultyhome.component';
import { CsfacultyhomeComponent } from './Faculty/CsFaculty/CsHome/csfacultyhome/csfacultyhome.component';
import { MechfacultyhomeComponent } from './Faculty/MechFaculty/MechHome/mechfacultyhome/mechfacultyhome.component';
import { ChangepasswordFacultyComponent } from './Faculty/ChangePasswordFaculty/changepassword-faculty/changepassword-faculty.component';
import { CivilFirstyearComponent } from './Faculty/CivilFaculty/civil-firstyear/civil-firstyear.component';
import { CivilSecondyearComponent } from './Faculty/CivilFaculty/civil-secondyear/civil-secondyear.component';
import { CivilThirdyearComponent } from './Faculty/CivilFaculty/civil-thirdyear/civil-thirdyear.component';
import { CivilFourthyearComponent } from './Faculty/CivilFaculty/civil-fourthyear/civil-fourthyear.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLoginComponent,
    HomeComponent,
    CsfirstYearComponent,
    CssecondYearComponent,
    CsthirdYearComponent,
    CsfourthYearComponent,
    CiviladmHomeComponent,
    CiviladmFirstyearComponent,
    CiviladmSecondyearComponent,
    CiviladmThirdyearComponent,
    CiviladmFourthyearComponent,
    MechadmHomeComponent,
    MechadmFirstyearComponent,
    MechadmSecondyearComponent,
    MechadmThirdyearComponent,
    MechadmFourthyearComponent,
    AdminaddDeleteComponent,
    ChangepasswordComponent,
    CivilfacultyhomeComponent,
    CsfacultyhomeComponent,
    MechfacultyhomeComponent,
    ChangepasswordFacultyComponent,
    CivilFirstyearComponent,
    CivilSecondyearComponent,
    CivilThirdyearComponent,
    CivilFourthyearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
