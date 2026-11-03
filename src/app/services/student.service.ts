import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiURL="http://localhost:5185/api/students";

  constructor(private http:HttpClient) { }

  // Get all Student
  getStudents():Observable<Student[]>{  
    return this.http.get<Student[]>(this.apiURL);
  }

   // Get all By Id Student
  getStudentById(id:number):Observable<Student>{  
    return this.http.get<Student>(`${this.apiURL}/${id}`);
  }

  addStudent(student:Student):Observable<Student>{
    return this.http.post<Student>(this.apiURL,student)
  }

  updateStudent(id:number,student:Student):Observable<Student>{
    return this.http.put<Student>(`${this.apiURL}/${id}`,student)
  }

  deleteStudent(id:number):Observable<any>{
    return this.http.delete(`${this.apiURL}/${id}`);
  }


}
