import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civiladm-fourthyear',
  templateUrl: './civiladm-fourthyear.component.html',
  styleUrls: ['./civiladm-fourthyear.component.css']
})
export class CiviladmFourthyearComponent {
  @Input() Item: any | undefined

  civilfourthyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.civilfourthyeardetail()
  }

  civilfourthyeardetail(){
    this.service.civilfourthyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.civilfourthyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.civilfourthyearindividual(id)
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
