import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { MarksModel } from '../model/marks-model';
import { StudentserviceService } from '../service/studentservice.service';

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {

  students!: MarksModel[];
  studentNames!: string;
  public maleArray: any = [];

  highcharts = Highcharts; 

  constructor(private studentService: StudentserviceService) { }

  // public options: any = {
  //   chart: {
  //     type: 'line',
  //     },
  //     title: {
  //       text: 'Students Score Board 2021/Year'
  //     },
  //     credits: {
  //       enabled: false
  //     },
  //     xAxis: {
  //       categories: ['English', 'Maths', 'Science'],
  //     },
  //     yAxis: {
  //       title: {
  //         text: 'Marks'
  //       },
  //     },
  //     plotOptions: {
  //       series:{
  //         }
  //     },
  //     series: [],
  //   }

  public options: any = {
    chart : {
      type: 'pie',
    },
    title : {
      text: 'Male/Female Percentage % Pie Chart'
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
      names: 'Uses',
      colorByPoint: true,
      data: [{
        name: 'MALE',
        y: this.getMaleStudent(),
        sliced: true,
        selected: true
      }, {
        name: 'FEMALE',
        y: 10
      }]
    }]
  };

  ngOnInit(): void {
    this.getMaleStudent();
    Highcharts.chart('pie-container', this.options);
  }
  
  getMaleStudent(): number {
    this.studentService.getAllStudents().subscribe(
      (response: any) => {
        this.students = response;
        this.students.forEach(data => {
          if(data.gender == 'MALE'){
            this.maleArray.push(data.gender);
            console.log(data.gender);
            this.maleArray.length;
          }
        });        
      }
    )
    console.log(this.maleArray.length - 1); 
    return this.maleArray.length - 1;
  }
}
