import { Component } from '@angular/core';
import { UserComponent } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserComponent],
  template: `<app-user></app-user>`
})
export class AppComponent {}