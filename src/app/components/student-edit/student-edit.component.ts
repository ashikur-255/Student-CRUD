import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StudentService } from '../../services/student.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-edit',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './student-edit.component.html',
  styleUrl: './student-edit.component.css'
})
export class StudentEditComponent implements OnInit {
  id!:number;
    student={
      id:0,
      name:'',
      department:'',
      age:0
    };
    constructor(private stuService:StudentService,private route:ActivatedRoute,private router:Router){}

    ngOnInit(): void {
      this.id=Number(this.route.snapshot.paramMap.get(`id`));
      this.stuService.getStudentById(this.id).subscribe(data=>{
        this.student=data;
      });
    }
    updateStudent(){
      this.stuService.updateStudent(this.id,this.student).subscribe(()=>{
        alert('Updated Successfully');
        this.router.navigate(['/']);
      });
    }
}
