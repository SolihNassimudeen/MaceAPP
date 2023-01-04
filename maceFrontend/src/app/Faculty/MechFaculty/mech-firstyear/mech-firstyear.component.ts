import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mech-firstyear',
  templateUrl: './mech-firstyear.component.html',
  styleUrls: ['./mech-firstyear.component.css']
})
export class MechFirstyearComponent {

  @Input() Item: any | undefined

  mechfirstyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any
  Mark_Email:any
  
  subjectAarray=this.validation.group({
    subjectAFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectASecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectAThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]]
  })

  subjectBarray=this.validation.group({
    subjectBFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]]
  })

  subjectCarray=this.validation.group({
    subjectCFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]]
  })

  subjectDarray=this.validation.group({
    subjectDFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]]
  })

  subjectEarray=this.validation.group({
    subjectEFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectESecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectEThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
  })

  subjectFarray=this.validation.group({
    subjectFFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]] 
  })

  constructor(private service:ServiceService, private validation:FormBuilder){}

  ngOnInit(){
    this.mechfirstyeardetail()
  }

  mechfirstyeardetail(){
    this.service.mechfirstyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.mechfirstyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.mechfirstyearindividual(id)
      .subscribe((result: any) => {
        if (result) {
          this.detail_Name = result.Name
          this.Registration = result.Registration
          this.detail_Email = result.Email
          this.detail_DOB = result.DOB
          this.contact_No = result.contact
          this.detail_id = id
        }
      })
  }

  marks(Email:any){
    this.Mark_Email=Email
  }


  subjectAsubmit(){
    if(this.subjectAarray.valid){
      this.service.mechfirstyearsubA(this.Mark_Email,this.subjectAarray.value.subjectAFirst,this.subjectAarray.value.subjectASecond,this.subjectAarray.value.subjectAThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }
  subjectBsubmit(){
    if(this.subjectBarray.valid){
      this.service.mechfirstyearsubB(this.Mark_Email,this.subjectBarray.value.subjectBFirst,this.subjectBarray.value.subjectBSecond,this.subjectBarray.value.subjectBThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }
  subjectCsubmit(){
    if(this.subjectCarray.valid){
      this.service.mechfirstyearsubC(this.Mark_Email,this.subjectCarray.value.subjectCFirst,this.subjectCarray.value.subjectCSecond,this.subjectCarray.value.subjectCThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }
  subjectDsubmit(){
    if(this.subjectDarray.valid){
      this.service.mechfirstyearsubD(this.Mark_Email,this.subjectDarray.value.subjectDFirst,this.subjectDarray.value.subjectDSecond,this.subjectDarray.value.subjectDThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }
  subjectEsubmit(){
    if(this.subjectEarray.valid){
      this.service.mechfirstyearsubE(this.Mark_Email,this.subjectEarray.value.subjectEFirst,this.subjectEarray.value.subjectESecond,this.subjectEarray.value.subjectEThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }
  subjectFsubmit(){
    if(this.subjectFarray.valid){      
      this.service.mechfirstyearsubF(this.Mark_Email,this.subjectFarray.value.subjectFFirst,this.subjectFarray.value.subjectFSecond,this.subjectFarray.value.subjectFThird)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })
    }
    else{
      alert('Entered data not in a valid form')
    }
  }

  detailcancel() {
    this.detail_id = ""
    this.detail_Name =''
    this.Registration = ''
    this.detail_Email =''
    this.detail_DOB = ''
    this.contact_No = ''
    this.Mark_Email=''
  }

}
