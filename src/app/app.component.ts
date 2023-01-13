import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from './actions/counter.action';
import { loadTodoStart } from './actions/todo.action';
import { ITodo } from './models/todo';
import { AppState, todosSelector } from './selector';

// import { getPosts } from './store/actions/todo.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  count$: Observable<number>;
  todos: Observable<ITodo[]>;
  constructor(private store: Store<AppState>) {}
  ngOnInit(): void {
    this.todos = this.store.select(todosSelector);
  }

  getTodos() {
    this.store.dispatch(loadTodoStart());
  }
  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
