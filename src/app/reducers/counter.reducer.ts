import { createReducer, on } from '@ngrx/store';
import { decrement, increment, reset } from '../actions/counter.action';

// declare state interface
export interface Counter {
  count: number;
}
//create initial couner state
export const counterInitialState: Counter = {
  count: 0,
};

//create reducer and export if to be used in app module
export const counterReducer = createReducer(
  counterInitialState,
  on(increment, (state) => ({
    count: state.count + 1,
  })),
  on(decrement, (state) => ({
    count: state.count - 1,
  })),
  on(reset, () => ({ count: 0 }))
);
