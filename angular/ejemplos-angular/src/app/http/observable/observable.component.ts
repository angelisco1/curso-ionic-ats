import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {
  num: number = 0;
  subs: Subscription = null;

  constructor() { }

  ngOnInit(): void {
    const numsObs = interval(1000);

    this.subs = numsObs.subscribe((num) => {
      console.log(num);
      this.num = num;
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
