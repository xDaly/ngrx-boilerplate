import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Counter, Login, TodoData } from './reducers';


// declare app state interface  in import all state interfaces from reducers
export interface AppState {
  counter: Counter;
  login: Login;
  todos : TodoData
}

//create feature selector ( feature selector will get all the reducer -all the state-)
export const counterFeatureSelector =
  createFeatureSelector<Counter>('counterReducer');

//create selector (selector is for selection only one attribute of state )
export const counterSelector = createSelector(
  counterFeatureSelector,
  (s) => s.count
);

export const loginFeatureSelector = createFeatureSelector<Login>('loginRecuer');
export const loginSelector = createSelector(loginFeatureSelector, (s) => s);


export const todosFeatureSelector = createFeatureSelector<TodoData>('todoDataReducer');
export const todosSelector = createSelector(todosFeatureSelector,(s)=>s.todos)
