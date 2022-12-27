import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civilfacultyhome',
  templateUrl: './civilfacultyhome.component.html',
  styleUrls: ['./civilfacultyhome.component.css']
})
export class CivilfacultyhomeComponent {

  FacultyName: any
  selectedpage: Number = 0
  Notification1: any
  Notification2: any
  Notification3: any

  constructor(private service: ServiceService) {
    this.FacultyName = JSON.parse(localStorage.getItem('Facultyname') || '')
  }

  ngOnInit() {
    this.notificationplaceholder()
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

  pagecancel() {
    this.selectedpage = 0
  }
  studentadd() { }
  studentdelete() { }
  ChangePassword() {
    this.selectedpage = 1
  }
  logout() { }

  home() { 
    this.selectedpage=0
  }
  firstyear() {
    this.selectedpage=4
   }
  secondyear() { }
  thirdyear() { }
  fourthyear() { }

}
