import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mechadm-firstyear',
  templateUrl: './mechadm-firstyear.component.html',
  styleUrls: ['./mechadm-firstyear.component.css']
})
export class MechadmFirstyearComponent {

  @Input() Item: any | undefined

  mechfirstyearArray:any=[]

  constructor(private service:ServiceService){ }

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

  details(id:any){

  }
}
