import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civilfacultyhome',
  templateUrl: './civilfacultyhome.component.html',
  styleUrls: ['./civilfacultyhome.component.css']
})
export class CivilfacultyhomeComponent {

  Name: any
  selectedpage: any=''
  Notification1: any
  Notification2: any
  Notification3: any

  constructor(private service: ServiceService,private route:Router) {
    this.Name = JSON.parse(localStorage.getItem('Name') || '')
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
    this.selectedpage = ""
  }
  studentadd() { 
    this.selectedpage=5
  }
  studentdelete() {
    this.selectedpage=6
   }
  ChangePassword() {
    this.selectedpage = 1
  }
  logout() { 
    this.route.navigateByUrl('')
  }

  home() { 
    this.selectedpage=""
  }
  firstyear() {
    this.selectedpage="civilfirst"
   }
  secondyear() { 
    this.selectedpage="civilsecond"
  }
  thirdyear() {
    this.selectedpage="civilthird"
   }
  fourthyear() {
    this.selectedpage="civilfourth"
   }

}
