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

  details(id:any){

  }
}
