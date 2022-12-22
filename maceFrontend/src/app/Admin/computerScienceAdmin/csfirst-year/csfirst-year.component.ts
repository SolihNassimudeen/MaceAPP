import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-csfirst-year',
  templateUrl: './csfirst-year.component.html',
  styleUrls: ['./csfirst-year.component.css']
})
export class CsfirstYearComponent {
  @Input() Item: any | undefined

  csfirstyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){
    this.csfirstyeardetail()
  }

  csfirstyeardetail(){
    this.service.csfirstyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.csfirstyearArray=result.table
      }
    })
  }

  details(id:any){

  }

}
