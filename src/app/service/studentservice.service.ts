import { MarksModel } from './../model/marks-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentserviceService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  //find all studentmarks
  public getAllStudents() : Observable<MarksModel[]>{
    return this.http.get<MarksModel[]>(`${this.apiUrl}/api/students`);
  }

  //add student marks
  public addStudentMarks(marks: MarksModel) : Observable<MarksModel>{
    return this.http.post<MarksModel>(`${this.apiUrl}/api/student/save`, marks);
  }

}
