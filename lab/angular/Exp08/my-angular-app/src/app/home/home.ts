import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  name : string ="Srushti";
  age: number =21;
  course: string ="cs";

  changeName(){
    this.name="sonu";
    thi.age=20;
    this.course="ML";
    console.log("Name changed to:" this.name,this.age,this.course);
  }
}
