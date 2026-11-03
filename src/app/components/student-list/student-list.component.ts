import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Student } from '../../Models/student';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-student-list',
  standalone:true,
  imports: [CommonModule,RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent implements OnInit {
  students:Student[]=[];
  constructor(private sService:StudentService){}
  ngOnInit(): void {
    this.loadStudents();
  }
  loadStudents(){
    this.sService.getStudents().subscribe(data=>{
      this.students=data;
    });
  }

  deleteStudent(id:number){
    if(confirm('Are You Sure?'))
    {
      this.sService.deleteStudent(id).subscribe(()=>{
        this.loadStudents();
      });
    }
  }
}
