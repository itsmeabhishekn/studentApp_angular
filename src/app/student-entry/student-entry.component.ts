import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  constructor(private api: ApiService) { }

  name = ""
  rollNo = ""
  admnNo = ""
  mobNo = ""
  clgName = ""
  parentName = ""
  parentMobNo = ""
  username = ""
  password = ""
  cpassword = ""

  readValues = () => {
    let data = {
      "name": this.name,
      "rollNo": this.rollNo,
      "admnNo": this.admnNo,
      "mobNo": this.mobNo,
      "clgName": this.clgName,
      "parentName": this.parentName,
      "parentMobNo:": this.parentMobNo,
      "username": this.username,
      "password": this.password,
      "cpassword": this.cpassword
    }
    console.log(data)
    this.api.addStudent(data).subscribe(
      (response: any) => {
        console.log(response)
      }
    )
  }



}
