import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-search',
  templateUrl: './student-search.component.html',
  styleUrls: ['./student-search.component.css']
})
export class StudentSearchComponent {


  constructor(private api: ApiService) { }

  admnNo = ""

  searchdata: any = {}



  readValues = () => {


    let data: any = {
      "empcode": this.admnNo
    }
    console.log(data)
    this.api.searchStudent(data).subscribe(
      (response: any) => {
        console.log(response)
        if (response.length == 0) {
          alert("no result found")
        }
        else {
          this.searchdata = response
        }
      }
    )
  }

  deleteBtnClick= (admnNo:any) => 
  {
let data:any={"admnNo":admnNo}
this.api.deleteStudent(data).subscribe(
  (searchdata:any)=>
  {
    console.log(searchdata)
  }
)
  }

}
