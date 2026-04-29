import { Component } from '@angular/core';

@Component({
  selector: 'app-student-card',
  standalone: true,
  templateUrl: './student-card.html',
  styleUrls: ['./student-card.css']
})
export class StudentCardComponent {
  name = "XYZ";
  course = "Angular";
  imageUrl = "download (1).jpeg";

  changeImage() {
    this.imageUrl = "download(2).jpg";
  }
}