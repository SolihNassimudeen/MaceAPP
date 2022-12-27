import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mechadm-fourthyear',
  templateUrl: './mechadm-fourthyear.component.html',
  styleUrls: ['./mechadm-fourthyear.component.css']
})
export class MechadmFourthyearComponent {

  @Input() Item: any | undefined

  mechfourthyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.mechfourthyeardetail()
  }

  mechfourthyeardetail(){
    this.service.mechfourthyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.mechfourthyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.mechfourthyearindividual(id)
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
