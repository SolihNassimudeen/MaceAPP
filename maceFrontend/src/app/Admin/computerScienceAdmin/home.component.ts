import { group } from '@angular/animations';
import { ThisReceiver } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Chart, registerables } from 'node_modules/chart.js';
import { ServiceService } from 'src/app/service.service';
Chart.register(...registerables);



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  AdminName:any
  //notification 
  studentsnumber:any=[]
  facultynumber:any=[]
  notificationplaceholder1:any
  notificationplaceholder2:any
  notificationplaceholder3:any
  notificationarray = this.validation.group({
    notification1: ['', [Validators.required]],
    notification2: ['', [Validators.required]],
    notification3: ['', [Validators.required]]
  })
  //parent child admin add and delete
  adminAddanddelete:Number=0

  constructor(private route: Router, private validation: FormBuilder, private service: ServiceService) {
    this.AdminName=JSON.parse(localStorage.getItem('Name')||'')
   }

  ngOnInit() {
    this.studentCount()
    this.facultyCount()
    this.notificationplaceholder()
     
  }

  studentGraph() {
    const studentChart = new Chart("studentChart", {
      type: 'bar',
      data: {
        labels: ['Ist year', 'IInd year', 'IIIrd year', 'IVth year'],
        datasets: [{
          label: 'No. of students',
          data: this.studentsnumber,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  facultyGraph() {
    const facultyChart = new Chart("facultyChart", {
      type: 'bar',
      data: {
        labels: ['Cs', 'Civil', 'Mech'],
        datasets: [{
          label: '# of Votes',
          data: this.facultynumber,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

  }

  //navigation button
  home(){
    this.adminAddanddelete=0
    location.reload()
  }
  firstyear() {
    this.adminAddanddelete=8
  }
  secondyear() {
    this.adminAddanddelete=9
  }
  thirdyear() {
    this.adminAddanddelete=10
  }
  fourthyear() {
    this.adminAddanddelete=11
  }
  //left navigation button
  csadmin() {
    this.route.navigateByUrl('adminhome')
  }
  civiladmin() {
    this.route.navigateByUrl('civiladmhome')
  }
  mechadmin() {
    this.route.navigateByUrl('mechadmhome')
  }
  logout() {
    this.route.navigateByUrl('adminlogin')
  }
  //add and delete section
  adminadd(){
    this.adminAddanddelete=1
  }
  admindelete(){
    this.adminAddanddelete=2
  }
  facultyadd(){
    this.adminAddanddelete=3
  }
  facultydelete(){
    this.adminAddanddelete=4
  }
  studentadd(){
    this.adminAddanddelete=5
  }
  
  studentdelete(){
    this.adminAddanddelete=6
  }
  Addordeletecancel(){
    this.adminAddanddelete=0

  }


 //notification
  notificationupdate() {
    var notification1: any = this.notificationarray.value.notification1
    var notification2: any = this.notificationarray.value.notification2
    var notification3: any = this.notificationarray.value.notification3

    if (this.notificationarray.valid) {
      this.service.notificationUpdate(notification1, notification2, notification3)
        .subscribe((result: any) => {
          alert(result.message)
          location.reload()
        }, (result) => {
          alert(result.error.message)
        })
    }
    else {
      alert('You should fill all this three boxes before submit')
    }
  }
  notificationplaceholder(){
    this.service.notificationplaceholder()
    .subscribe((result:any)=>{
      if(result){
        this.notificationplaceholder1=result.Notification1
        this.notificationplaceholder2=result.Notification2
        this.notificationplaceholder3=result.Notification3
      }
    })
  }

  studentCount(){
    this.service.CsstudentCount()
    .subscribe((result:any)=>{
      if(result){
        this.studentsnumber.push(result.firstYearCount,result.secondYearCount,result.thirdYearCount,result.fourthYearCount)
        this.studentGraph()
      }
    },(result)=>{
      alert(result.error.message)
    })
  }
  facultyCount(){
    this.service.facultyCount()
    .subscribe((result:any)=>{
      if(result){
        this.facultynumber.push(result.Cscount,result.Civilcount,result.Mechcount)
        this.facultyGraph()
      }
    },(result)=>{
      alert(result.error.message)
    })
  }

  ChangePassword(){
    this.adminAddanddelete=7
  }
}
