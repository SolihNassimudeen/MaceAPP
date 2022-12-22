import { Component,Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-civiladm-firstyear',
  templateUrl: './civiladm-firstyear.component.html',
  styleUrls: ['./civiladm-firstyear.component.css']
})
export class CiviladmFirstyearComponent {
  @Input() Item: any | undefined

  civilfirstyearArray:any=[]

  constructor(private service:ServiceService){ }

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

  details(id:any){

  }

}
