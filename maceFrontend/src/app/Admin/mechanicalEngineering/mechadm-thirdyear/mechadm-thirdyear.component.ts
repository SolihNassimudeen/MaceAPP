import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mechadm-thirdyear',
  templateUrl: './mechadm-thirdyear.component.html',
  styleUrls: ['./mechadm-thirdyear.component.css']
})
export class MechadmThirdyearComponent {

  @Input() Item: any | undefined

  mechthirdyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.mechthirdyeardetail()
  }

  mechthirdyeardetail(){
    this.service.mechthirdyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.mechthirdyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.mechthirdyearindividual(id)
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
  detailcancel() {
    this.detail_id = ""
    this.detail_Name =''
    this.Registration = ''
    this.detail_Email =''
    this.detail_DOB = ''
    this.contact_No = ''
  }
}
