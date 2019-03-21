import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  message: string;
  today: Date;
  price: number;
  obj;
  text: string;

  constructor() { }

  ngOnInit() {
    this.message = 'hELLo WOrlD';
    this.today = new Date();
    this.price = 23.5;
    this.obj = {name: 'ABCD', cgpa: 3.6};
    this.text = '';
  }

}
