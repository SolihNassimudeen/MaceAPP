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

  details(id:any){

  }
}
