import { Component } from '@angular/core';
import { StudentCardComponent } from './student-card/student-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentCardComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}