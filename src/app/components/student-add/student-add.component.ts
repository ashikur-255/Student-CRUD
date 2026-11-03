import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { StudentService } from '../../services/student.service';
import { Student } from '../../Models/student';

@Component({
  selector: 'app-student-add',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent {

  loading = false;

  student: Student = {
    id: 0,
    name: '',
    department: '',
    age: 0
  };

  constructor(
    private stuService: StudentService,
    private router: Router
  ) {}

  addStudent(): void {

    if (!this.student.name || !this.student.department || !this.student.age) {
      alert('Please fill all fields');
      return;
    }

    this.loading = true;

    this.stuService.addStudent(this.student).subscribe({
      next: () => {
        this.loading = false;
        alert('Student Added Successfully');
        this.router.navigate(['/']);
      },

      error: (err) => {
        console.error(err);
        this.loading = false;
        alert('Something went wrong. Try again.');
      }
    });
  }
}