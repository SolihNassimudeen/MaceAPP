import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CiviladmFirstyearComponent } from './Admin/civilEngineering/civiladm-firstyear/civiladm-firstyear.component';
import { CiviladmFourthyearComponent } from './Admin/civilEngineering/civiladm-fourthyear/civiladm-fourthyear.component';
import { CiviladmHomeComponent } from './Admin/civilEngineering/civiladm-home/civiladm-home.component';
import { CiviladmSecondyearComponent } from './Admin/civilEngineering/civiladm-secondyear/civiladm-secondyear.component';
import { CiviladmThirdyearComponent } from './Admin/civilEngineering/civiladm-thirdyear/civiladm-thirdyear.component';
import { CsfirstYearComponent } from './Admin/computerScienceAdmin/csfirst-year/csfirst-year.component';
import { CsfourthYearComponent } from './Admin/computerScienceAdmin/csfourth-year/csfourth-year.component';
import { CssecondYearComponent } from './Admin/computerScienceAdmin/cssecond-year/cssecond-year.component';
import { CsthirdYearComponent } from './Admin/computerScienceAdmin/csthird-year/csthird-year.component';
import { HomeComponent } from './Admin/computerScienceAdmin/home.component';
import { MechadmFirstyearComponent } from './Admin/mechanicalEngineering/mechadm-firstyear/mechadm-firstyear.component';
import { MechadmFourthyearComponent } from './Admin/mechanicalEngineering/mechadm-fourthyear/mechadm-fourthyear.component';
import { MechadmHomeComponent } from './Admin/mechanicalEngineering/mechadm-home/mechadm-home.component';
import { MechadmSecondyearComponent } from './Admin/mechanicalEngineering/mechadm-secondyear/mechadm-secondyear.component';
import { MechadmThirdyearComponent } from './Admin/mechanicalEngineering/mechadm-thirdyear/mechadm-thirdyear.component';
import { CivilfacultyhomeComponent } from './Faculty/CivilFaculty/CivilHome/civilfacultyhome/civilfacultyhome.component';
import { CsfacultyhomeComponent } from './Faculty/CsFaculty/CsHome/csfacultyhome/csfacultyhome.component';
import { MechfacultyhomeComponent } from './Faculty/MechFaculty/MechHome/mechfacultyhome/mechfacultyhome.component';
import { AdminLoginComponent } from './Login/admin-login/admin-login.component';
import { LoginComponent } from './Login/login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'adminlogin',component:AdminLoginComponent},

  {path:'adminhome',component:HomeComponent},
  {path:'csadmFirstyear',component:CsfirstYearComponent},
  {path:'csadmSecondyear',component:CssecondYearComponent},
  {path:'csadmThirdyear',component:CsthirdYearComponent},
  {path:'csadmFourthyear',component:CsfourthYearComponent},

  {path:'civiladmhome',component:CiviladmHomeComponent},
  {path:'civiladmFirstyear',component:CiviladmFirstyearComponent},
  {path:'civiladmSecondyear',component:CiviladmSecondyearComponent},
  {path:'civiladmThirdyear',component:CiviladmThirdyearComponent},
  {path:'civiladmFourthyear',component:CiviladmFourthyearComponent},
  
  {path:'mechadmhome',component:MechadmHomeComponent},
  {path:'mechadmFirstyear',component:MechadmFirstyearComponent},
  {path:'mechadmSecondyear',component:MechadmSecondyearComponent},
  {path:'mechadmThirdyear',component:MechadmThirdyearComponent},
  {path:'mechadmFourthyear',component:MechadmFourthyearComponent},

  {path:'civilfacultyhome',component:CivilfacultyhomeComponent},
  {path:'csfacultyhome',component:CsfacultyhomeComponent},
  {path:'mechfacultyhome',component:MechfacultyhomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
