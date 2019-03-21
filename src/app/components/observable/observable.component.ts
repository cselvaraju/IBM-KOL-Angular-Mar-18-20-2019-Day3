import { Component, OnInit } from '@angular/core';
import { ObservableService } from '../../services/observable.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  data;

  constructor(private myService: ObservableService) { }

  ngOnInit() {
    this.myService.getData().subscribe(
      data => {
        this.data = data;
        console.log(data);
      }
    );
  }

}
