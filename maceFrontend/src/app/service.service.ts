import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  adminlogin(email:any,password:any){
    const data={
      "email":email,
      "password":password
    }
    return this.http.post('http://localhost:3002/adminlogin',data)
  }

  notificationUpdate(notification1:any,notification2:any,notification3:any){
    const data={
      "notification1":notification1,
      "notification2":notification2,
      "notification3":notification3
    }
    return this.http.post('http://localhost:3002/notificationUpdate',data)
  }
  notificationplaceholder(){
    return this.http.get('http://localhost:3002/notificationplaceholder')
  }

  studentCount(){
    return this.http.get('http://localhost:3002/CsstudentCount')
  }
  facultyCount(){
    return this.http.get('http://localhost:3002/FacultyCount')
  }

  addAdmin(Name:any,Email:any,DOB:any,Password:any){
    const data={
      "Name":Name,
      "Email":Email,
      "DOB":DOB,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/adminAdd',data)
  }
  deleteadmin(Email:any){
    return this.http.delete(`http://localhost:3002/deleteadmin/${Email}`)
  }

  addCsfaculty(Name:any,Email:any,Department:any,sub1:any,sub2:any,sub3:any,sub4:any,Password:any){
    const data={
      "Name":Name,
      "Email":Email,
      "Department":Department,
      "sub1":sub1,
      "sub2":sub2,
      "sub3":sub3,
      "sub4":sub4,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/addCsfaculty',data)
  }
  addMechfaculty(Name:any,Email:any,Department:any,sub1:any,sub2:any,sub3:any,sub4:any,Password:any){
    const data={
      "Name":Name,
      "Email":Email,
      "Department":Department,
      "sub1":sub1,
      "sub2":sub2,
      "sub3":sub3,
      "sub4":sub4,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/addMechfaculty',data)
  }
  addCivilfaculty(Name:any,Email:any,Department:any,sub1:any,sub2:any,sub3:any,sub4:any,Password:any){
    const data={
      "Name":Name,
      "Email":Email,
      "Department":Department,
      "sub1":sub1,
      "sub2":sub2,
      "sub3":sub3,
      "sub4":sub4,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/addCivilfaculty',data)
  }
  deleteCsfaculty(Email:any){
    return this.http.delete(`http://localhost:3002/deleteCsfaculty/${Email}`)
  }
  deleteMechfaculty(Email:any){
    return this.http.delete(`http://localhost:3002/deleteMechfaculty/${Email}`)
  }
  deleteCivilfaculty(Email:any){
    return this.http.delete(`http://localhost:3002/deleteCivilfaculty/${Email}`)
  }
}
