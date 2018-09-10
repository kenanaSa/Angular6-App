import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  public  num1:number;
  public num2 :number;
  public res :number;
  constructor() { }

  ngOnInit() {
  }
  
  
  add(){
    this.res=this.num1 + this.num2;
  }
  sub(){
    this.res=this.num1 - this.num2;
  }
  mul(){
    this.res=this.num1 * this.num2;
  }
  div(){
    this.res=this.num1 / this.num2;
  }
  rem(){
    this.res=this.num1 % this.num2;
  }
  sqrt1(){
    this.res=Math.sqrt(this.num1);
  }

}