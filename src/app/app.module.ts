import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentSearchComponent } from './student-search/student-search.component';
import { StudentDeleteComponent } from './student-delete/student-delete.component';
import { RouterModule, Routes } from '@angular/router';

import { StudentviewComponent } from './studentview/studentview.component';
import { HttpClientModule } from '@angular/common/http';

const myroute: Routes = [
  {
    path: "",
    component: StudentviewComponent
  },
  {
    path: "add",
    component: StudentEntryComponent
  },
  {path:"view",
component:StudentviewComponent},
{
  path:"search",
  component:StudentSearchComponent
},
{
  path:"delete",
  component:StudentSearchComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    NavbarComponent,
    StudentEditComponent,
    StudentSearchComponent,
    StudentDeleteComponent,
    StudentviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(myroute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
