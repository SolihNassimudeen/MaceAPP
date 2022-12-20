import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-adminadd-delete',
  templateUrl: './adminadd-delete.component.html',
  styleUrls: ['./adminadd-delete.component.css']
})
export class AdminaddDeleteComponent {
  @Input() Item: any | undefined
  @Output() onCancel = new EventEmitter

  adminAddArray = this.validation.group({
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    DOB: ['', [Validators.required]],
    Password: ['', [Validators.required, Validators.minLength(4)]]
  })
  deleteadminarray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
  facultyAddArray = this.validation.group({
    Name: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    sub1: ['', [Validators.pattern('[A-Z0-9]*')]],
    sub2: ['', [Validators.pattern('[A-Z0-9]*')]],
    sub3: ['', [Validators.pattern('[A-Z0-9]*')]],
    sub4: ['', [Validators.pattern('[A-Z0-9]*')]],
    Password: ['', [Validators.required, Validators.minLength(4)]]
  })
  facultyDepartment: any
  deletefacultyarray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })

  constructor(private validation: FormBuilder, private service: ServiceService) { }
  ngOnInit() { }

  cancel() {
    this.onCancel.emit()
  }

  addAdmin() {
    if (this.adminAddArray.valid) {
      this.service.addAdmin(this.adminAddArray.value.Name, this.adminAddArray.value.Email, this.adminAddArray.value.DOB, this.adminAddArray.value.Password)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            location.reload()
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else {
      alert('Entered data not in a valid form')
    }
  }
  deleteAdmin() {
    if (this.deleteadminarray.valid) {
      if (this.deleteadminarray.value.Email != "solihsolu321@gmail.com") {
        this.service.deleteadmin(this.deleteadminarray.value.Email)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else {
        alert('No one can delete Core admin')
      }
    } else {
      alert('You entered Email not in a valid form')
    }
  }
  departmentCS() {
    this.facultyDepartment = "Computer Science"
  }
  departmentCivil() {
    this.facultyDepartment = "Civil Engineering"
  }
  departmentMech() {
    this.facultyDepartment = "Mechanical Engineering"
  }
  addFaculty() {
    if (this.facultyAddArray.valid) {
      if (this.facultyDepartment == "Computer Science") {
        this.service.addCsfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.facultyDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      }
      else if (this.facultyDepartment == 'Civil Engineering') {
        this.service.addCivilfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.facultyDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else {
        this.service.addMechfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.facultyDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      }
    } else {
      alert('You Entered data not in a valid form')
    }
  }
  deletefaculty() {
    if (this.deletefacultyarray.valid) {
      if (this.facultyDepartment == "Computer Science") {
        this.service.deleteCsfaculty(this.deletefacultyarray.value.Email)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            location.reload()
          }
        },(result)=>{
          alert(result.error.message)
        })
      } else if (this.facultyDepartment == "Civil Engineering") {
        this.service.deleteCivilfaculty(this.deletefacultyarray.value.Email)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            location.reload()
          }
        },(result)=>{
          alert(result.error.message)
        })
      } else {
        this.service.deleteMechfaculty(this.deletefacultyarray.value.Email)
        .subscribe((result:any)=>{
          if(result){
            alert(result.message)
            location.reload()
          }
        },(result)=>{
          alert(result.error.message)
        })
      }
    } else {
      alert('You entered mail not in a valid form')
    }
  }

  

}
