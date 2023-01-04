import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-studentregistration',
  templateUrl: './studentregistration.component.html',
  styleUrls: ['./studentregistration.component.css']
})
export class StudentregistrationComponent {

  studentRegistrationArray=this.validation.group({
    Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    DOB:['',[Validators.required]],
    ContactNo:['',[Validators.required,Validators.pattern('[0-9]*'),Validators.minLength(10)]],
    Password:['',[Validators.required,Validators.minLength(4)]]
  })
  studentYearandDepartment:any
  CurrentMail:any


  constructor(private service:ServiceService,private route:Router,private validation:FormBuilder){}

  ngOnInit(){
    this.studentYearandDepartment=JSON.parse(localStorage.getItem('studyeardep')||'')
    this.CurrentMail=JSON.parse(localStorage.getItem('Email')||'')
  }

  studentRegistration(){

    if(this.studentRegistrationArray.valid){
      if(this.studentYearandDepartment=='CSfirst'){
        this.service.csfirstyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='CSsecond'){
        this.service.cssecondyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='CSthird'){
        this.service.csthirdyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='CSfourth'){
        this.service.csfourthyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Civilfirst'){
        this.service.civilfirstyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Civilsecond'){
        this.service.civilsecondyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Civilthird'){
        this.service.civilthirdyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Civilfourth'){
        this.service.civilfourthyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Mechfirst'){
        this.service.mechfirstyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Mechsecond'){
        this.service.mechsecondyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Mechthird'){
        this.service.mechthirdyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }else if(this.studentYearandDepartment=='Mechfourth'){
        this.service.mechfourthyearregistration(this.CurrentMail,this.studentRegistrationArray.value.Name,this.studentRegistrationArray.value.DOB,this.studentRegistrationArray.value.ContactNo,this.studentRegistrationArray.value.Password)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            this.route.navigateByUrl('')
          }
        },(result)=>{
          alert(result.error.message)
        })
      }

    }else{
      alert('Entered data not in a valid form.')
    }

  }
}
