import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Directive-NG';

  isDisplay=true;
  buttonName="Hide"

  showHide(){
  this.isDisplay=!this.isDisplay; 

  if (this.buttonName=="Hide") {
    this.buttonName="Show"
  } else {
    this.buttonName="Hide"
  }
}

Students:{id:number,name:String,age:number}[]=[{
  "id":101,
  "name":"Aaditya Patil",
  "age":22

}
,{
  "id":102,
  "name":"Aachal Yadav",
  "age":42

}
]

 selectedTheme='';

 istrue=true;
 num=2
}
