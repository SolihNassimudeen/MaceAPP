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

  facultyloginarray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Password: ['', [Validators.required, Validators.minLength(4)]]
  })
  studentloginarray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Password: ['', [Validators.required, Validators.minLength(4)]]
  })
  facultydepartment: any
  studdepartment: any
  studyear: any

  constructor(private route: Router, private validation: FormBuilder, private service: ServiceService) { }

  adminloginpage() {
    this.route.navigateByUrl('adminlogin')
  }

  stdyear(event: any) {
    this.studyear = event.target.value
  }

  stddepartment(event: any) {
    this.studdepartment = event.target.value
  }

  facdepartment(event: any) {
    this.facultydepartment = event.target.value
  }

  facultylogin() {
    if (this.facultyloginarray.valid) {

      if (this.facultydepartment == "Civil") {
        this.service.facultylogincivil(this.facultyloginarray.value.Email, this.facultyloginarray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              localStorage.setItem("Name", JSON.stringify(result.Name))
              localStorage.setItem("Email", JSON.stringify(result.Email))
              this.route.navigateByUrl('civilfacultyhome')
            }
          }, (result) => {
            alert(result.error.message)
          })
      }

      else if (this.facultydepartment == "CS") {
        this.service.facultylogincs(this.facultyloginarray.value.Email, this.facultyloginarray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              localStorage.setItem("Name", JSON.stringify(result.Name))
              localStorage.setItem("Email", JSON.stringify(result.Email))
              this.route.navigateByUrl('csfacultyhome')
            }
          }, (result) => {
            alert(result.error.message)
          })
      }

      else if (this.facultydepartment == "Mech") {
        this.service.facultyloginmech(this.facultyloginarray.value.Email, this.facultyloginarray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              localStorage.setItem("Name", JSON.stringify(result.Name))
              localStorage.setItem("Email", JSON.stringify(result.Email))
              this.route.navigateByUrl('mechfacultyhome')
            }
          }, (result) => {
            alert(result.error.message)
          })
      }

      else {
        alert("please select any department")
      }


    } else {
      alert("Your data not in a valid form")
    }
  }

  studentlogin() {

    if (this.studentloginarray.valid) {

      if (this.studdepartment == "CS") {

        if (this.studyear == 'First') {
          this.service.csfirstyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("CSfirst"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Second') {
          this.service.cssecondyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("CSsecond"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Third') {
          this.service.csthirdyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("CSthird"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Fourth') {
          this.service.csfourthyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("CSfourth"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else {
          alert('Please select the academic year')
        }

      }

      else if (this.studdepartment == "Civil") {
        if (this.studyear == 'First') {
          this.service.civilfirstyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Civilfirst"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Second') {
          this.service.civilsecondyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Civilsecond"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Third') {
          this.service.civilthirdyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Civilthird"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Fourth') {
          this.service.civilfourthyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Civilfourth"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else {
          alert('Please select the academic year')
        }
      }

      else if (this.studdepartment == "Mech") {
        if (this.studyear == 'First') {
          this.service.mechfirstyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Mechfirst"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Second') {
          this.service.mechsecondyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Mechsecond"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Third') {
          this.service.mechthirdyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Mechthird"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else if (this.studyear == 'Fourth') {
          this.service.mechfourthyearlogin(this.studentloginarray.value.Email, this.studentloginarray.value.Password)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                localStorage.setItem('studyeardep', JSON.stringify("Mechfourth"))
                localStorage.setItem('Email',JSON.stringify(result.Email))
                if (result.Registration == false) {
                  this.route.navigateByUrl("studentregistration")
                } else {
                  this.route.navigateByUrl("studenthome")
                }
              }
            },(result)=>{
              alert(result.error.message)
            })
        }
        else {
          alert('Please select the academic year')
        }
      }

      else {
        alert("Please select any department")
      }

    }

    else {
      alert('Data not in a valid form')
    }
  }


}
