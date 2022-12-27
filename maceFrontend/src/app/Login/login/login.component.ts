import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  facultyloginarray=this.validation.group({
    Email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Password:['',[Validators.required,Validators.minLength(4)]]
  })
  facultydepartment:any

  constructor(private route:Router,private validation:FormBuilder,private service:ServiceService){}

  adminloginpage(){
    this.route.navigateByUrl('adminlogin')
  }
  departmentCS(){

  }
  departmentCivil(){

  }
  departmentMech(){

  }

  departmentfacultyCS(){
    this.facultydepartment="CS"
  }
  departmentfacultyCivil(){
    this.facultydepartment="Civil"
  }
  departmentfacultyMech(){
    this.facultydepartment="Mech"
  }


  firstyearselected(){

  }
  secondyearselected(){

  }
  thirdyearselected(){

  }
  fourthyearselected(){
    
  }

  facultylogin(){
    if(this.facultyloginarray.valid){

      if(this.facultydepartment=="Civil"){
        this.service.facultylogincivil(this.facultyloginarray.value.Email,this.facultyloginarray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            localStorage.setItem("Facultyname",JSON.stringify(result.Name))
            localStorage.setItem("Email",JSON.stringify(result.Email))
            this.route.navigateByUrl('civilfacultyhome')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }
      
      else if(this.facultydepartment=="CS"){
        this.service.facultylogincs(this.facultyloginarray.value.Email,this.facultyloginarray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            localStorage.setItem("Facultyname",JSON.stringify(result.Name))
            localStorage.setItem("Email",JSON.stringify(result.Email))
            this.route.navigateByUrl('csfacultyhome')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }

      else if(this.facultydepartment=="Mech"){
        this.service.facultyloginmech(this.facultyloginarray.value.Email,this.facultyloginarray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            localStorage.setItem("Facultyname",JSON.stringify(result.Name))
            localStorage.setItem("Email",JSON.stringify(result.Email))
            this.route.navigateByUrl('mechfacultyhome')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }

      else{
        alert("please select any department")
      }


    }else{
      alert("Your data not in a valid form")
    }
  }
}
