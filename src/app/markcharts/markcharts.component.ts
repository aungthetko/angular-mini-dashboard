import { MarksModel } from './../model/marks-model';
import { StudentserviceService } from './../service/studentservice.service';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-markcharts',
  templateUrl: './markcharts.component.html',
  styleUrls: ['./markcharts.component.css']
})
export class MarkchartsComponent implements OnInit {

  studentModel!: MarksModel[];
  studentNames!: string;

  highcharts = Highcharts; 

  constructor(private studentService: StudentserviceService) { }

  public options: any = {
    chart: {
      type: 'column',
      },
      title: {
        text: 'Students Score Board 2021/Year'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        categories: ['English', 'Maths', 'Science'],
      },
      yAxis: {
        title: {
          text: 'Marks'
        },
      },
      plotOptions: {
        series:{
          }
      },
      series: [],
    }

    ngOnInit() {
      this.getApiResponse().then(
      data => {
        const subjectMarks: any = [];
        const names: any = [];
        data.forEach(row => {
          const temp_row = [
            row.english,
            row.maths,
            row.science
          ];
          names.push(row.name);
          subjectMarks.push(temp_row);
          });
  
          this.studentModel = subjectMarks;
          this.studentNames = names;
          const dataSeries = [];
          for (let i = 0; i<this.studentModel.length; i++) {
            dataSeries.push({
            data: this.studentModel[i],
            name: this.studentNames[i]
            });
          }
        this.options.series = dataSeries;
        // this.options.plotOptions.series= {
        //    point: {
        //      events: {
        //        click: function () {
        //          alert('Name: '+this.series.name+', Subject: ' +  this.category + ', Marks: ' + this.y);
        //        }
        //      }
        //    }
        // }
  
        Highcharts.chart('container', this.options);
      },
      error => {
        console.error('Something went wrong.');
      }); 
  
    }

  getApiResponse() {
    return this.studentService.getAllStudents()
      .toPromise().then(res => {
        console.log(res);
        return res;
    });
  }
}
