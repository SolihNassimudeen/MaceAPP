import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civil-firstyear',
  templateUrl: './civil-firstyear.component.html',
  styleUrls: ['./civil-firstyear.component.css']
})
export class CivilFirstyearComponent {
  @Input() Item: any | undefined

  civilfirstyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any
  Mark_Email:any
  markArray=this.validation.group({
    subjectAFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectASecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectAThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectAFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectBFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectCFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectDFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectEFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectESecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectEThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectEFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFFirst:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFSecond:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFThird:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    subjectFFinal:['',[Validators.pattern('[0-9]*'),Validators.maxLength(3)]],
    
  })

  constructor(private service:ServiceService, private validation:FormBuilder){}

  ngOnInit(){
    this.civilfirstyeardetail()
  }

  civilfirstyeardetail(){
    this.service.civilfirstyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.civilfirstyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.civilfirstyearindividual(id)
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

  submit(){
    if(this.markArray.valid){
      console.log(this.Mark_Email);
      
      this.service.civilfirstyearmark(this.Mark_Email,this.markArray.value.subjectAFirst,this.markArray.value.subjectASecond,this.markArray.value.subjectAThird,this.markArray.value.subjectAFinal,this.markArray.value.subjectBFirst,this.markArray.value.subjectBSecond,this.markArray.value.subjectBThird,this.markArray.value.subjectBFinal,this.markArray.value.subjectCFirst,this.markArray.value.subjectCSecond,this.markArray.value.subjectCThird,this.markArray.value.subjectCFinal,this.markArray.value.subjectDFirst,this.markArray.value.subjectDSecond,this.markArray.value.subjectDThird,this.markArray.value.subjectDFinal,this.markArray.value.subjectEFirst,this.markArray.value.subjectESecond,this.markArray.value.subjectEThird,this.markArray.value.subjectFFinal,this.markArray.value.subjectFFirst,this.markArray.value.subjectFSecond,this.markArray.value.subjectFThird,this.markArray.value.subjectFFinal)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
          location.reload()
        }
      },(result)=>{
        alert(result.error.message)
      })

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
