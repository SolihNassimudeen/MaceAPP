import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civiladm-secondyear',
  templateUrl: './civiladm-secondyear.component.html',
  styleUrls: ['./civiladm-secondyear.component.css']
})
export class CiviladmSecondyearComponent {

  @Input() Item: any | undefined

  civilsecondyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.civilsecondyeardetail()
  }

  civilsecondyeardetail(){
    this.service.civilsecondyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.civilsecondyearArray=result.table
      }
    })
  }

  details(id:any){

  }

}
