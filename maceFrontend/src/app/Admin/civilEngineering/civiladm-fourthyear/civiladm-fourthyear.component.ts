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

  details(id:any){

  }
}
