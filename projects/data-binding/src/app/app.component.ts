import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Data_binding';
  name="Aadi"

  //objects

  student={
    id:101,
    name:'Aaditya'
  }

  clickMe(){

      alert("Hello "+this.student.name)
  }

  firstName=this.student.name
}

