import { Component } from '@angular/core';
import { LiveInputComponent } from './live-input/live-input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LiveInputComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {}