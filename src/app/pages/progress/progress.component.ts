import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 15;
  porcentaje2: number = 35;

  constructor() { }

  ngOnInit(): void {
  }

  get getPorcentaje1() {
    return `${this.porcentaje1}%`
  }
  get getPorcentaje2() {
    return `${this.porcentaje2}%`
  }

  


}
