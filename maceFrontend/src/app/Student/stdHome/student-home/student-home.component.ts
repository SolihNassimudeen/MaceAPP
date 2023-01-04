import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-student-home',
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent {

  Notification1: any
  Notification2: any
  Notification3: any
  ktunotificationarray: any = []
  studentYearandDepartment: any
  CurrentMail: any
  studentpasswordchangearray = this.validation.group({
    Password: ['', [Validators.required, Validators.minLength(4)]]
  })
  studentName: any
  studentEmail: any
  studentDOB: any
  studentContact: any

  subAfirst: any
  subAsecond: any
  subAthird: any
  subBfirst: any
  subBsecond: any
  subBthird: any
  subCfirst: any
  subCsecond: any
  subCthird: any
  subDfirst: any
  subDsecond: any
  subDthird: any
  subEfirst: any
  subEsecond: any
  subEthird: any
  subFfirst: any
  subFsecond: any
  subFthird: any


  constructor(private service: ServiceService, private validation: FormBuilder ,private route:Router) {
    this.service.ktunotification()
      .subscribe((result: any) => {
        if (result) {
          this.ktunotificationarray = result.notifications
        }
      })
    this.studentYearandDepartment = JSON.parse(localStorage.getItem('studyeardep') || '')
    this.CurrentMail = JSON.parse(localStorage.getItem('Email') || '')
  }

  ngOnInit() {
    this.notificationplaceholder()
    this.studentDetails()
    this.markdetails()

  }

  notificationplaceholder() {
    this.service.notificationplaceholder()
      .subscribe((result: any) => {
        if (result) {
          this.Notification1 = result.Notification1
          this.Notification2 = result.Notification2
          this.Notification3 = result.Notification3
        }
      })
  }

  studentDetails() {

    if (this.studentYearandDepartment == 'CSfirst') {
      this.service.csfirstyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSsecond') {
      this.service.cssecondyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSthird') {
      this.service.csthirdyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSfourth') {
      this.service.csfourthyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilfirst') {
      this.service.civilfirstyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilsecond') {
      this.service.civilsecondyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilthird') {
      this.service.civilthirdyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilfourth') {
      this.service.civilfourthyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechfirst') {
      this.service.mechfirstyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechsecond') {
      this.service.mechsecondyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechthird') {
      this.service.mechthirdyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechfourth') {
      this.service.mechfourthyear(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.studentName = result.Name
            this.studentEmail = result.Email
            this.studentDOB = result.DOB,
              this.studentContact = result.contact
          }
        }, (result) => {
          alert(result.error.message)
        })
    }
  }

  passwordChange() {
    if (this.studentpasswordchangearray.valid) {
      if (this.studentYearandDepartment == 'CSfirst') {
        this.service.csfirstyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'CSsecond') {
        this.service.cssecondyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'CSthird') {
        this.service.csthirdyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'CSfourth') {
        this.service.csfourthyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Civilfirst') {
        this.service.civilfirstyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Civilsecond') {
        this.service.civilsecondyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Civilthird') {
        this.service.civilthirdyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Civilfourth') {
        this.service.civilfourthyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Mechfirst') {
        this.service.mechfirstyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Mechsecond') {
        this.service.mechsecondyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Mechthird') {
        this.service.mechthirdyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      } else if (this.studentYearandDepartment == 'Mechfourth') {
        this.service.mechfourthyearchangepassword(this.CurrentMail, this.studentpasswordchangearray.value.Password)
          .subscribe((result: any) => {
            if (result) {
              alert(result.message)
            }
          }, (result) => {
            alert(result.error.message)
          })
      }
    } else {
      alert('New password not in a valid form')
    }
  }


  markdetails(){
    if (this.studentYearandDepartment == 'CSfirst') {
      this.service.csfirstmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSsecond') {
      this.service.cssecondmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSthird') {
      this.service.csthirdmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'CSfourth') {
      this.service.csfourthmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilfirst') {
      this.service.civilfirstmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilsecond') {
      this.service.civilsecondmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilthird') {
      this.service.civilthirdmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Civilfourth') {
      this.service.civilfourthmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechfirst') {
      this.service.mechfirstmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechsecond') {
      this.service.mechsecondmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechthird') {
      this.service.mechthirdmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else if (this.studentYearandDepartment == 'Mechfourth') {
      this.service.mechfourthmarkdisplay(this.CurrentMail)
        .subscribe((result: any) => {
          if (result) {
            this.subAfirst=result.subAfirst
            this.subAsecond=result.subAsecond
            this.subAthird=result.subAthird
            this.subBfirst=result.subBfirst
            this.subBsecond=result.subBsecond
            this.subBthird=result.subBthird
            this.subCfirst=result.subCfirst
            this.subCsecond=result.subCsecond
            this.subCthird=result.subCthird
            this.subDfirst=result.subDfirst
            this.subDsecond=result.subDsecond
            this.subDthird=result.subDthird
            this.subEfirst=result.subEfirst
            this.subEsecond=result.subEsecond
            this.subEthird=result.subEthird
            this.subFfirst=result.subFfirst
            this.subFsecond=result.subFsecond
            this.subFthird=result.subFthird
          }
        }, (result) => {
          alert(result.error.message)
        })
    }
  }

  logout(){
    this.route.navigateByUrl('')
  }

  homescroll(){
    window.scrollTo(0,0)
  }
  detailsscroll(){
    window.scrollTo(0,700)
  }
  ktunonescroll(){
    window.scrollTo(0,1380)
  }
  aboutusscroll(){
    window.scrollTo(0,2080)
  }

}



