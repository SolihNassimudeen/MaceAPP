import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civiladm-thirdyear',
  templateUrl: './civiladm-thirdyear.component.html',
  styleUrls: ['./civiladm-thirdyear.component.css']
})
export class CiviladmThirdyearComponent {
  @Input() Item: any | undefined

  civilthirdyearArray:any=[]
  detail_id: any
  Registration: any
  detail_Name: any
  detail_Email: any
  detail_DOB: any
  contact_No: any

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.civilthirdyeardetail()
  }

  civilthirdyeardetail(){
    this.service.civilthirdyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.civilthirdyearArray=result.table
      }
    })
  }

  details(id: any) {
    this.service.civilthirdyearindividual(id)
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
