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


  //faculty login
  facultylogincivil(Email: any, Password: any) {
    const data = {
      "Email": Email,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/facultylogincivil', data)
  }

  facultylogincs(Email: any, Password: any) {
    const data = {
      "Email": Email,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/facultylogincs', data)
  }

  facultyloginmech(Email: any, Password: any) {
    const data = {
      "Email": Email,
      "Password": Password
    }
    return this.http.post('http://localhost:3002/facultyloginmech', data)
  }

  //student login
  csfirstyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfirstyearlogin', data)
  }

  cssecondyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/cssecondyearlogin', data)
  }

  csthirdyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csthirdyearlogin', data)
  }

  csfourthyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfourthyearlogin', data)
  }


  civilfirstyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfirstyearlogin', data)
  }

  civilsecondyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilsecondyearlogin', data)
  }

  civilthirdyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilthirdyearlogin', data)
  }

  civilfourthyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfourthyearlogin', data)
  }


  mechfirstyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfirstyearlogin', data)
  }

  mechsecondyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechsecondyearlogin', data)
  }

  mechthirdyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechthirdyearlogin', data)
  }

  mechfourthyearlogin(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfourthyearlogin', data)
  }


  //student Registration
  csfirstyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfirstyearregistration',data)
  }

  cssecondyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/cssecondyearregistration',data)
  }

  csthirdyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csthirdyearregistration',data)
  }

  csfourthyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfourthyearregistration',data)
  }


  civilfirstyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfirstyearregistration',data)
  }

  civilsecondyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilsecondyearregistration',data)
  }

  civilthirdyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilthirdyearregistration',data)
  }

  civilfourthyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfourthyearregistration',data)
  }


  mechfirstyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfirstyearregistration',data)
  }

  mechsecondyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechsecondyearregistration',data)
  }

  mechthirdyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechthirdyearregistration',data)
  }

  mechfourthyearregistration(Email:any,Name:any,DOB:any,ContactNo:any,Password:any){
    const data={
      "Email":Email,
      "Name":Name,
      "DOB":DOB,
      "ContactNo":ContactNo,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfourthyearregistration',data)
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

  //student individual detail for admin
  csfirstyearindividual(id: any) {
    return this.http.post('http://localhost:3002/csfirstyearindividual', ({ "id": id }))
  }

  cssecondyearindividual(id: any) {
    return this.http.post('http://localhost:3002/cssecondyearindividual', ({ "id": id }))
  }

  csthirdyearindividual(id: any) {
    return this.http.post('http://localhost:3002/csthirdyearindividual', ({ "id": id }))
  }

  csfourthyearindividual(id: any) {
    return this.http.post('http://localhost:3002/csfourthyearindividual', ({ "id": id }))
  }


  civilfirstyearindividual(id: any) {
    return this.http.post('http://localhost:3002/civilfirstyearindividual', ({ "id": id }))
  }

  civilsecondyearindividual(id: any) {
    return this.http.post('http://localhost:3002/civilsecondyearindividual', ({ "id": id }))
  }

  civilthirdyearindividual(id: any) {
    return this.http.post('http://localhost:3002/civilthirdyearindividual', ({ "id": id }))
  }

  civilfourthyearindividual(id: any) {
    return this.http.post('http://localhost:3002/civilfourthyearindividual', ({ "id": id }))
  }


  mechfirstyearindividual(id: any) {
    return this.http.post('http://localhost:3002/mechfirstyearindividual', ({ "id": id }))
  }

  mechsecondyearindividual(id: any) {
    return this.http.post('http://localhost:3002/mechsecondyearindividual', ({ "id": id }))
  }

  mechthirdyearindividual(id: any) {
    return this.http.post('http://localhost:3002/mechthirdyearindividual', ({ "id": id }))
  }

  mechfourthyearindividual(id: any) {
    return this.http.post('http://localhost:3002/mechfourthyearindividual', ({ "id": id }))
  }

  

  //faculty changepassword
  civilfacultychangePassword(Email: any, Password: any, newPassword: any) {
    const data = {
      "Email": Email,
      "Password": Password,
      "newPassword": newPassword
    }
    return this.http.post('http://localhost:3002/civilfacultychangePassword', data)
  }

  csfacultychangePassword(Email: any, Password: any, newPassword: any) {
    const data = {
      "Email": Email,
      "Password": Password,
      "newPassword": newPassword
    }
    return this.http.post('http://localhost:3002/csfacultychangePassword', data)
  }

  mechfacultychangePassword(Email: any, Password: any, newPassword: any) {
    const data = {
      "Email": Email,
      "Password": Password,
      "newPassword": newPassword
    }
    return this.http.post('http://localhost:3002/mechfacultychangePassword', data)
  }


  civilfirstyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubA', data)
  }

  civilfirstyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubB', data)
  }

  civilfirstyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubC', data)
  }

  civilfirstyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubD', data)
  }

  civilfirstyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubE', data)
  }

  civilfirstyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/civilfirstyearsubF', data)
  }

  civilsecondyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubA', data)
  }

  civilsecondyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubB', data)
  }

  civilsecondyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubC', data)
  }

  civilsecondyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubD', data)
  }

  civilsecondyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubE', data)
  }

  civilsecondyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/civilsecondyearsubF', data)
  }

  civilthirdyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubA', data)
  }

  civilthirdyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubB', data)
  }

  civilthirdyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubC', data)
  }

  civilthirdyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubD', data)
  }

  civilthirdyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubE', data)
  }

  civilthirdyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/civilthirdyearsubF', data)
  }

  civilfourthyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubA', data)
  }

  civilfourthyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubB', data)
  }

  civilfourthyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubC', data)
  }

  civilfourthyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubD', data)
  }

  civilfourthyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubE', data)
  }

  civilfourthyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/civilfourthyearsubF', data)
  }


  csfirstyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/csfirstyearsubA', data)
  }

  csfirstyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/csfirstyearsubB', data)
  }

  csfirstyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/csfirstyearsubC', data)
  }

  csfirstyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/csfirstyearsubD', data)
  }

  csfirstyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/csfirstyearsubE', data)
  }

  csfirstyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/csfirstyearsubF', data)
  }

  cssecondyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/cssecondyearsubA', data)
  }

  cssecondyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/cssecondyearsubB', data)
  }

  cssecondyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/cssecondyearsubC', data)
  }

  cssecondyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/cssecondyearsubD', data)
  }

  cssecondyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/cssecondyearsubE', data)
  }

  cssecondyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/cssecondyearsubF', data)
  }

  csthirdyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/csthirdyearsubA', data)
  }

  csthirdyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/csthirdyearsubB', data)
  }

  csthirdyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/csthirdyearsubC', data)
  }

  csthirdyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/csthirdyearsubD', data)
  }

  csthirdyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/csthirdyearsubE', data)
  }

  csthirdyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/csthirdyearsubF', data)
  }

  csfourthyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/csfourthyearsubA', data)
  }

  csfourthyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/csfourthyearsubB', data)
  }

  csfourthyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/csfourthyearsubC', data)
  }

  csfourthyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/csfourthyearsubD', data)
  }

  csfourthyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/csfourthyearsubE', data)
  }

  csfourthyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/csfourthyearsubF', data)
  }


  mechfirstyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubA', data)
  }

  mechfirstyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubB', data)
  }

  mechfirstyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubC', data)
  }

  mechfirstyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubD', data)
  }

  mechfirstyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubE', data)
  }

  mechfirstyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/mechfirstyearsubF', data)
  }

  mechsecondyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubA', data)
  }

  mechsecondyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubB', data)
  }

  mechsecondyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubC', data)
  }

  mechsecondyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubD', data)
  }

  mechsecondyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubE', data)
  }

  mechsecondyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/mechsecondyearsubF', data)
  }

  mechthirdyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubA', data)
  }

  mechthirdyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubB', data)
  }

  mechthirdyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubC', data)
  }

  mechthirdyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubD', data)
  }

  mechthirdyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubE', data)
  }

  mechthirdyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/mechthirdyearsubF', data)
  }

  mechfourthyearsubA(Email: any, subAfirst: any, subAsecond: any, subAthird: any){
    const data = {
      "Email": Email,
      "subAfirst": subAfirst,
      "subAsecond": subAsecond,
      "subAthird": subAthird
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubA', data)
  }

  mechfourthyearsubB(Email: any, subBfirst: any, subBsecond: any, subBthird: any){
    const data = {
      "Email": Email,
      "subBfirst": subBfirst,
      "subBsecond": subBsecond,
      "subBthird": subBthird
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubB', data)
  }

  mechfourthyearsubC(Email: any, subCfirst: any, subCsecond: any, subCthird: any){
    const data = {
      "Email": Email,
      "subCfirst": subCfirst,
      "subCsecond": subCsecond,
      "subCthird": subCthird
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubC', data)
  }

  mechfourthyearsubD(Email: any, subDfirst: any, subDsecond: any, subDthird: any){
    const data = {
      "Email": Email,
      "subDfirst": subDfirst,
      "subDsecond": subDsecond,
      "subDthird": subDthird
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubD', data)
  }

  mechfourthyearsubE(Email: any, subEfirst: any, subEsecond: any, subEthird: any){
    const data = {
      "Email": Email,
      "subEfirst": subEfirst,
      "subEsecond": subEsecond,
      "subEthird": subEthird,
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubE', data)
  }

  mechfourthyearsubF(Email: any, subFfirst: any, subFsecond: any, subFthird: any){
    const data = {
      "Email": Email,
      "subFfirst": subFfirst,
      "subFsecond": subFsecond,
      "subFthird": subFthird,
    }
    return this.http.post('http://localhost:3002/mechfourthyearsubF', data)
  }

  ktunotification(){
    return this.http.get('https://ktunotification.herokuapp.com/')
  }

  csfirstyear(Email: any){
    return this.http.post('http://localhost:3002/csfirstyear',{"Email":Email})
  }

  cssecondyear(Email: any){
    return this.http.post('http://localhost:3002/cssecondyear',{"Email":Email})
  }

  csthirdyear(Email: any){
    return this.http.post('http://localhost:3002/csthirdyear',{"Email":Email})
  }

  csfourthyear(Email: any){
    return this.http.post('http://localhost:3002/csfourthyear',{"Email":Email})
  }

  civilfirstyear(Email: any){
    return this.http.post('http://localhost:3002/civilfirstyear',{"Email":Email})
  }

  civilsecondyear(Email: any){
    return this.http.post('http://localhost:3002/civilsecondyear',{"Email":Email})
  }

  civilthirdyear(Email: any){
    return this.http.post('http://localhost:3002/civilthirdyear',{"Email":Email})
  }

  civilfourthyear(Email: any){
    return this.http.post('http://localhost:3002/civilfourthyear',{"Email":Email})
  }

  mechfirstyear(Email: any){
    return this.http.post('http://localhost:3002/mechfirstyear',{"Email":Email})
  }

  mechsecondyear(Email: any){
    return this.http.post('http://localhost:3002/mechsecondyear',{"Email":Email})
  }

  mechthirdyear(Email: any){
    return this.http.post('http://localhost:3002/mechthirdyear',{"Email":Email})
  }

  mechfourthyear(Email: any){
    return this.http.post('http://localhost:3002/mechfourthyear',{"Email":Email})
  }

  csfirstyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfirstyearchangepassword',data)
  }
  cssecondyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/cssecondyearchangepassword',data)
  }
  csthirdyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csthirdyearchangepassword',data)
  }
  csfourthyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/csfourthyearchangepassword',data)
  }

  civilfirstyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfirstyearchangepassword',data)
  }
  civilsecondyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilsecondyearchangepassword',data)
  }
  civilthirdyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilthirdyearchangepassword',data)
  }
  civilfourthyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/civilfourthyearchangepassword',data)
  }

  mechfirstyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfirstyearchangepassword',data)
  }
  mechsecondyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechsecondyearchangepassword',data)
  }
  mechthirdyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechthirdyearchangepassword',data)
  }
  mechfourthyearchangepassword(Email:any,Password:any){
    const data={
      "Email":Email,
      "Password":Password
    }
    return this.http.post('http://localhost:3002/mechfourthyearchangepassword',data)
  }


  csfirstmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/csfirstmarkdisplay',{"Email":Email})
  }

  cssecondmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/cssecondmarkdisplay',{"Email":Email})
  }

  csthirdmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/csthirdmarkdisplay',{"Email":Email})
  }

  csfourthmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/csfourthmarkdisplay',{"Email":Email})
  }

  civilfirstmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/civilfirstmarkdisplay',{"Email":Email})
  }

  civilsecondmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/civilsecondmarkdisplay',{"Email":Email})
  }

  civilthirdmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/civilthirdmarkdisplay',{"Email":Email})
  }

  civilfourthmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/civilfourthmarkdisplay',{"Email":Email})
  }

  mechfirstmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/mechfirstmarkdisplay',{"Email":Email})
  }

  mechsecondmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/mechsecondmarkdisplay',{"Email":Email})
  }

  mechthirdmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/mechthirdmarkdisplay',{"Email":Email})
  }

  mechfourthmarkdisplay(Email:any){
    return this.http.post('http://localhost:3002/mechfourthmarkdisplay',{"Email":Email})
  }


  
}
