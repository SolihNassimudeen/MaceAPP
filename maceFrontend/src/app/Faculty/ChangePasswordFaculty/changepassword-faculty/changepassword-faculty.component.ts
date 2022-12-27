import { Component,Input,Output,EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-changepassword-faculty',
  templateUrl: './changepassword-faculty.component.html',
  styleUrls: ['./changepassword-faculty.component.css']
})
export class ChangepasswordFacultyComponent {

  @Input() Item: any | undefined
  @Output() onCancel = new EventEmitter

  changepasswordArray = this.validation.group({
    oldpassword: ['', [Validators.required]],
    newpassword: ['', [Validators.required, Validators.minLength(4)]]
  })
  CurrentlogindEmail: any

  constructor(private validation: FormBuilder, private service: ServiceService){
    this.CurrentlogindEmail=JSON.parse(localStorage.getItem('Email')||'')
  }

  civilchangepassword() {
    if (this.changepasswordArray.valid) {
      this.service.civilfacultychangePassword(this.CurrentlogindEmail, this.changepasswordArray.value.oldpassword, this.changepasswordArray.value.newpassword)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            location.reload()
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else {
      alert('Entered values not in a valid form')
    }
  }

  cschangepassword() {
    if (this.changepasswordArray.valid) {
      this.service.csfacultychangePassword(this.CurrentlogindEmail, this.changepasswordArray.value.oldpassword, this.changepasswordArray.value.newpassword)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            location.reload()
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else {
      alert('Entered values not in a valid form')
    }
  }

  mechchangepassword() {
    if (this.changepasswordArray.valid) {
      this.service.mechfacultychangePassword(this.CurrentlogindEmail, this.changepasswordArray.value.oldpassword, this.changepasswordArray.value.newpassword)
        .subscribe((result: any) => {
          if (result) {
            alert(result.message)
            location.reload()
          }
        }, (result) => {
          alert(result.error.message)
        })
    } else {
      alert('Entered values not in a valid form')
    }
  }
  
  cancel() {
    this.onCancel.emit()
  }

}
