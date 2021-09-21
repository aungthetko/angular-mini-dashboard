import { MarksModel } from './model/marks-model';
import { StudentserviceService } from './service/studentservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'school-dashboard';
  public students!: MarksModel[];
  studentMark = new MarksModel();
  errorMessage!: string;  
  
  constructor(private studentService: StudentserviceService) { }

  ngOnInit(){
    this.getAllStudentsMark();
  }

  public getAllStudentsMark(): void{
    this.studentService.getAllStudents().subscribe(
      (response: MarksModel[]) => {
        this.students = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

  OnSubmit(){
    if(this.studentMark.english > 100 || this.studentMark.maths > 100 || this.studentMark.science > 100){
      this.errorMessage = "All marks can not be greater than 100";
      return;
    }
    this.addStudent(this.studentMark);
    this.studentMark = new MarksModel();
  }

  public addStudent(marks: MarksModel): void{
    this.studentService.addStudentMarks(marks).subscribe(
      (response: MarksModel) => {
        console.log(response);
        this.getAllStudentsMark();
        window.location.reload();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
