import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-mechadm-secondyear',
  templateUrl: './mechadm-secondyear.component.html',
  styleUrls: ['./mechadm-secondyear.component.css']
})
export class MechadmSecondyearComponent {

  @Input() Item: any | undefined

  mechsecondyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.mechsecondyeardetail()
  }

  mechsecondyeardetail(){
    this.service.mechsecondyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.mechsecondyearArray=result.table
      }
    })
  }

  details(id:any){

  }
}
