import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MarkchartsComponent } from './markcharts/markcharts.component';
import { FormsModule }   from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    MarkchartsComponent,
    NavbarComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
