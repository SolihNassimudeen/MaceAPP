import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  adminArray=this.Input.group({
    email:['',[Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    password:['',[Validators.required, Validators.minLength(3)]]
  })

  constructor(private Input:FormBuilder,private service:ServiceService,private route:Router){}

  ngOnInit(){}

  adminLogin(){
    var email:any=this.adminArray.value.email
    var password:any=this.adminArray.value.password

    if(this.adminArray.valid){
      this.service.adminlogin(email,password)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          this.route.navigateByUrl('adminhome')
        }
      },(result)=>{
        alert(result.error.message)
      })
    }else{
      alert('Invalid data was entered.')
    }
  }

}
