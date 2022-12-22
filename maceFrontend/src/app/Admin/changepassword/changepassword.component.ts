import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent {
  @Input() Item: any | undefined
  @Output() onCancel = new EventEmitter

  changepasswordArray = this.validation.group({
    oldpassword: ['', [Validators.required]],
    newpassword: ['', [Validators.required, Validators.minLength(4)]]
  })
  CurrentlogindEmail: any


  constructor(private validation: FormBuilder, private service: ServiceService) {
    this.CurrentlogindEmail = JSON.parse(localStorage.getItem('Email') || '')
  }
  

  changepassword() {
    if (this.changepasswordArray.valid) {
      this.service.changepassword(this.CurrentlogindEmail, this.changepasswordArray.value.oldpassword, this.changepasswordArray.value.newpassword)
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
