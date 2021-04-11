import { Component, Inject, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'lixo',
  templateUrl: './lixo.component.html',
})
export class LixoComponent {
  title = 'Front';

constructor( @Inject('BASE_URL') baseUrl: string) {
    console.log (baseUrl);
  }
} 
