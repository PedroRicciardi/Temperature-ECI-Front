import { Component, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

interface Temperature {
  temp_max: number,
  temp_min: number,
  temp: number
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  title = 'Front';
  private baseUrl: string
  public cidade: string
  public frase: string



  constructor(private http:HttpClient, @Inject('BASE_URL') baseUrl: string){
    this.baseUrl = baseUrl
  }

  ngOnChanges(){

  }

 
 public enviar(){
     console.log (this.baseUrl, this.http)
     this.http.get(`${ this.baseUrl }/temperature?city_name=${this.cidade}`)
      .subscribe((res:Temperature) => this.frase = 
       `Temperatura maxima de ${res.temp_max}° C \n 
        Temperatura minima de ${res.temp_min}° C\n 
        Temperatura atual de ${res.temp}° C`)
      
 }
}