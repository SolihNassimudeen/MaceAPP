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
  selectedDepartment: any
  deletefacultyarray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
  addStudentArray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })
  selectedyear: any
  defaultpassword: any = "mace@123"
  studentdeleteArray = this.validation.group({
    Email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
  })


  constructor(private validation: FormBuilder, private service: ServiceService) { }

  ngOnInit() { }


  cancel() {
    this.onCancel.emit()
  }

  //admin add and delete
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

  //department dropdown
  department(event:any){
    this.selectedDepartment=event.target.value
  }

  //faculty registration portion
  addFaculty() {
    if (this.facultyAddArray.valid) {
      if (this.selectedDepartment == "Computer Science") {
        this.service.addCsfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.selectedDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      }
      else if (this.selectedDepartment == 'Civil Engineering') {
        this.service.addCivilfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.selectedDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.selectedDepartment == "Mechanical Engineering") {
        this.service.addMechfaculty(this.facultyAddArray.value.Name, this.facultyAddArray.value.Email, this.selectedDepartment, this.facultyAddArray.value.sub1, this.facultyAddArray.value.sub2, this.facultyAddArray.value.sub3, this.facultyAddArray.value.sub4, this.facultyAddArray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else {
        alert("please select faculty department")
      }
    } else {
      alert('You Entered data not in a valid form')
    }
  }

  //faculty removing portion
  deletefaculty() {
    if (this.deletefacultyarray.valid) {
      if (this.selectedDepartment == "Computer Science") {
        this.service.deleteCsfaculty(this.deletefacultyarray.value.Email)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.selectedDepartment == "Civil Engineering") {
        this.service.deleteCivilfaculty(this.deletefacultyarray.value.Email)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.selectedDepartment == "Mechanical Engineering") {
        this.service.deleteMechfaculty(this.deletefacultyarray.value.Email)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
              location.reload()
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else {
        alert('please select the department')
      }
    } else {
      alert('You entered mail not in a valid form')
    }
  }

  //year dropdown
  stdyear(event:any){
    this.selectedyear=event.target.value
  }

  //add student
  addstudent() {
    if (this.addStudentArray.valid) {

      if (this.selectedDepartment == "Computer Science") {
        if (this.selectedyear == "firstyearselected") {
          this.service.addCsFirstyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.addCsSecondyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.addCsThirdyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.addCsFourthyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert('please select academic year')
        }
      }

      else if (this.selectedDepartment == "Civil Engineering") {
        if (this.selectedyear == "firstyearselected") {
          this.service.addCivilFirstyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.addCivilSecondyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.addCivilThirdyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.addCivilFourthyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert('please select academic year')
        }
      }


      else if (this.selectedDepartment == "Mechanical Engineering") {
        if (this.selectedyear == "firstyearselected") {
          this.service.addMechFirstyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.addMechSecondyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.addMechThirdyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.addMechFourthyear(this.addStudentArray.value.Email, this.defaultpassword)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert('please select academic year')
        }
      } else {
        alert('please select department of the student')
      }
    }

    else {
      alert("you entered mail not in a valid form")
    }
  }

  //student delete
  studentDelete() {
    if (this.studentdeleteArray.valid) {
      if (this.selectedDepartment == "Computer Science") {
        if (this.selectedyear == "firstyearselected") {
          this.service.deleteCsfirstyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.deleteCssecondyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.deleteCsThirdyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.deleteCsfourthyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert("please select any academic year")
        }
      }


      else if (this.selectedDepartment == "Civil Engineering") {
        if (this.selectedyear == "firstyearselected") {
          this.service.deleteCivilfirstyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.deleteCivilsecondyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.deleteCivilThirdyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.deleteCivilfourthyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert("please select any academic year")
        }
      }


      else if (this.selectedDepartment == "Mechanical Engineering") {
        if (this.selectedyear == "firstyearselected") {
          this.service.deleteMechfirstyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "secondyearselected") {
          this.service.deleteMechsecondyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "thirdyearselected") {
          this.service.deleteMechThirdyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else if (this.selectedyear == "fourthyearselected") {
          this.service.deleteMechfourthyear(this.studentdeleteArray.value.Email)
            .subscribe((result: any) => {
              if (result) {
                alert(result.message)
                location.reload()
              }
            }, (result) => {
              alert(result.error.message)
            })
        } else {
          alert("please select any academic year")
        }
      }

      else {
        alert("please select any department")
      }
    } else {
      alert('You entered data not in a valid form')
    }
  }



}
