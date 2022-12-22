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

  details(id:any){

  }
}
