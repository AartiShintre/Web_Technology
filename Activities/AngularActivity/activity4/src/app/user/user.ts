import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent implements OnInit {

  users: any[] = [];
  loading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("API Call Started");

    this.http.get<any>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          console.log("DATA RECEIVED:", data);
          this.users = data;
          this.loading = false;
        },
        error: (err) => {
          console.error("ERROR:", err);
          this.loading = false;
        }
      });
  }
}