import { Component, Input } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-cssecond-year',
  templateUrl: './cssecond-year.component.html',
  styleUrls: ['./cssecond-year.component.css']
})
export class CssecondYearComponent {
  @Input() Item: any | undefined

  cssecondyearArray:any=[]

  constructor(private service:ServiceService){ }

  ngOnInit(){

    this.cssecndyeardetail()

  }
  cssecndyeardetail(){
    this.service.cssecondyeartable()
    .subscribe((result:any)=>{
      if(result){
        this.cssecondyearArray=result.table
      }
    })
  }

  details(id:any){

  }
}
