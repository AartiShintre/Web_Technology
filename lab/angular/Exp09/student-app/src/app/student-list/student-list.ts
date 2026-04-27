import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../student'; ✅
@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentList {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}