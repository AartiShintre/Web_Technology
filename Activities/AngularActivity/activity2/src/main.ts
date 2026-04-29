import { bootstrapApplication } from '@angular/platform-browser';
import { LiveInputComponent } from './app/live-input/live-input';

bootstrapApplication(LiveInputComponent)
  .catch(err => console.error(err));