import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equation',
  templateUrl: './equation.component.html',
  styleUrls: ['./equation.component.css']
})
export class EquationComponent implements OnInit {
  public a: number;
  public b: number;
  public c: number;
  public x1: number;
  public x2: number;
  public message: string;
  constructor() { }

  ngOnInit() {
  }
  solve() {
    let delta = this.b * this.b - 4 * this.a * this.c;
    if (delta < 0) {
      this.message = "No real roots exist";
    }
    else if (delta == 0) {
      this.x1 = -this.b / 2 * this.a;
      this.message = "duplicated root :  "
      this.message += " x1 = x2 = " + this.x1.toString();

    }
    else {
      this.x1 = (-this.b + Math.sqrt(delta)) / 2 * this.a;
      this.x2 = (-this.b - Math.sqrt(delta)) / 2 * this.a;
      this.message = "The equation has 2 roots :  ";
      this.message += "X1 is " + this.x1.toString() + " and X2 is " + this.x2.toString();

    }

  }

}
