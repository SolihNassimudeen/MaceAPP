import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }


  //login
  adminlogin(email: any, password: any) {
    const data = {
      "email": email,
      "password": password
    }
    return this.http.post('http://localhost:3002/adminlogin', data)
  }

  //notification
  notificationUpdate(notification1: any, notification2: any, notification3: any) {
    const data = {
      "notification1": notification1,
      "notification2": notification2,
      "notification3": notification3
    }
    return this.http.post('http://localhost:3002/notificationUpdate', data)
  }
  notificationplaceholder() {
    return this.http.get('http://localhost:3002/notificationplaceholder')
  }

//student count
  CsstudentCount() {
    return this.http.get('http://localhost:3002/CsstudentCount')
  }
  CivilstudentCount() {
    return this.http.get('http://localhost:3002/CivilstudentCount')
  }
  MechstudentCount() {
    return this.http.get('http://localhost:3002/MechstudentCount')
  }

  facultyCount() {
    return this.http.get('http://localhost:3002/FacultyCount')
  }
//admin add and delete
  addAdmin(Name: any, Email: any, DOB: any, Password: any) {
    const data = {
      "Name": Name,
      "Email": Email,
      "DOB": DOB,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/adminAdd', data)
  }
  deleteadmin(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteadmin/${Email}`)
  }
//faculty add and delete
  addCsfaculty(Name: any, Email: any, Department: any, sub1: any, sub2: any, sub3: any, sub4: any, Password: any) {
    const data = {
      "Name": Name,
      "Email": Email,
      "Department": Department,
      "sub1": sub1,
      "sub2": sub2,
      "sub3": sub3,
      "sub4": sub4,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/addCsfaculty', data)
  }
  addMechfaculty(Name: any, Email: any, Department: any, sub1: any, sub2: any, sub3: any, sub4: any, Password: any) {
    const data = {
      "Name": Name,
      "Email": Email,
      "Department": Department,
      "sub1": sub1,
      "sub2": sub2,
      "sub3": sub3,
      "sub4": sub4,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/addMechfaculty', data)
  }
  addCivilfaculty(Name: any, Email: any, Department: any, sub1: any, sub2: any, sub3: any, sub4: any, Password: any) {
    const data = {
      "Name": Name,
      "Email": Email,
      "Department": Department,
      "sub1": sub1,
      "sub2": sub2,
      "sub3": sub3,
      "sub4": sub4,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/addCivilfaculty', data)
  }
  deleteCsfaculty(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCsfaculty/${Email}`)
  }
  deleteMechfaculty(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteMechfaculty/${Email}`)
  }
  deleteCivilfaculty(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCivilfaculty/${Email}`)
  }


  // student add and delete
  addCsFirstyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCsFirstyear', data)
  }
  addCsSecondyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCsSecondyear', data)
  }
  addCsThirdyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCsThirdyear', data)
  }
  addCsFourthyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCsFourthyear', data)
  }

  addCivilFirstyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCivilFirstyear', data)
  }
  addCivilSecondyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCivilSecondyear', data)
  }
  addCivilThirdyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCivilThirdyear', data)
  }
  addCivilFourthyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addCivilFourthyear', data)
  }

  addMechFirstyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addMechFirstyear', data)
  }
  addMechSecondyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addMechSecondyear', data)
  }
  addMechThirdyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addMechThirdyear', data)
  }
  addMechFourthyear(Email: any, Password: any) {
    const data = ({
      "Email": Email,
      "Password": Password
    })
    return this.http.post('http://localhost:3002/addMechFourthyear', data)
  }

  deleteCsfirstyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCsfirstyear/${Email}`)
  }
  deleteCssecondyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCssecondyear/${Email}`)
  }
  deleteCsThirdyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCsThirdyear/${Email}`)
  }
  deleteCsfourthyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCsfourthyear/${Email}`)
  }


  deleteCivilfirstyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCivilfirstyear/${Email}`)
  }
  deleteCivilsecondyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCivilsecondyear/${Email}`)
  }
  deleteCivilThirdyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCivilThirdyear/${Email}`)
  }
  deleteCivilfourthyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteCivilfourthyear/${Email}`)
  }

  deleteMechfirstyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteMechfirstyear/${Email}`)
  }
  deleteMechsecondyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteMechsecondyear/${Email}`)
  }
  deleteMechThirdyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteMechThirdyear/${Email}`)
  }
  deleteMechfourthyear(Email: any) {
    return this.http.delete(`http://localhost:3002/deleteMechfourthyear/${Email}`)
  }


  //change password
  changepassword(Email: any, Password: any, newPassword: any) {
    const data = {
      "Email": Email,
      "Password": Password,
      "newPassword": newPassword
    }
    return this.http.post('http://localhost:3002/changepassword', data)
  }

  //cs student details
  csfirstyeartable() {
    return this.http.get('http://localhost:3002/csfirstyeartable')
  }
  cssecondyeartable() {
    return this.http.get('http://localhost:3002/cssecondyeartable')
  }
  csthirdyeartable() {
    return this.http.get('http://localhost:3002/csthirdyeartable')
  }
  csfourthyeartable() {
    return this.http.get('http://localhost:3002/csfourthyeartable')
  }

  //civil student detail
  civilfirstyeartable() {
    return this.http.get('http://localhost:3002/civilfirstyeartable')
  }
  civilsecondyeartable() {
    return this.http.get('http://localhost:3002/civilsecondyeartable')
  }
  civilthirdyeartable() {
    return this.http.get('http://localhost:3002/civilthirdyeartable')
  }
  civilfourthyeartable() {
    return this.http.get('http://localhost:3002/civilfourthyeartable')
  }

  // mech student detail
  mechfirstyeartable() {
    return this.http.get('http://localhost:3002/mechfirstyeartable')
  }
  mechsecondyeartable() {
    return this.http.get('http://localhost:3002/mechsecondyeartable')
  }
  mechthirdyeartable() {
    return this.http.get('http://localhost:3002/mechthirdyeartable')
  }
  mechfourthyeartable() {
    return this.http.get('http://localhost:3002/mechfourthyeartable')
  }
}
