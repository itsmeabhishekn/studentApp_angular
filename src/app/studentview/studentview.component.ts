import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrls: ['./studentview.component.css']
})
export class StudentviewComponent {
  constructor(private api:ApiService)
  {
    api.fetchStudent().subscribe(
      (response)=>
      {
        this.data=response;
      }
    )
  }
data:any=[]
}
