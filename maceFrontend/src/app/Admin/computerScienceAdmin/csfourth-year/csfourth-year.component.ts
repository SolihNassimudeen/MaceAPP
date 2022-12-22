import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-csfourth-year',
  templateUrl: './csfourth-year.component.html',
  styleUrls: ['./csfourth-year.component.css']
})
export class CsfourthYearComponent {
  @Input() Item: any | undefined
  
  csfourthyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){

    this.csfourthyeardetail()

  }
  csfourthyeardetail(){
    this.service.csfourthyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.csfourthyearArray=result.table
      }
    })
  }

  details(id:any){

  }

}
