import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-csthird-year',
  templateUrl: './csthird-year.component.html',
  styleUrls: ['./csthird-year.component.css']
})
export class CsthirdYearComponent {

  @Input() Item: any | undefined

  csthirdyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){

    this.csthirdyeardetail()

  }
  csthirdyeardetail(){
    this.service.csthirdyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.csthirdyearArray=result.table
      }
    })
  }

  details(id:any){

  }

}
