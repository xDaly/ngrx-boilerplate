import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { counterFeatureSelector, counterSelector } from 'src/app/selector';
import { Counter } from 'src/app/reducers/counter.reducer';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  count$: Observable<any>;
  constructor(private store: Store<any>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = this.store.select(counterSelector);
  }
}
