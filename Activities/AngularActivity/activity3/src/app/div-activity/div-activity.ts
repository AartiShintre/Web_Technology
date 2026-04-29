import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-div-activity',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './div-activity.html',
  styleUrls: ['./div-activity.css']
})
export class DivActivityComponent {

  students = [
    { name: 'Aarti', marks: 85, active: true },
    { name: 'Rahul', marks: 45, active: false },
    { name: 'Sneha', marks: 72, active: true },
    { name: 'Amit', marks: 30, active: false }
  ];

}