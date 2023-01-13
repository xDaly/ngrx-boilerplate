import { HttpErrorResponse } from '@angular/common/http';
import { createReducer, on } from '@ngrx/store';
import {
  loadTodoFailed,
  loadTodoStart,
  loadTodoSuccess,
} from '../actions/todo.action';
import { ITodo } from '../models/todo';


// declare state interface
export interface TodoData {
  todos: ITodo[];
  error: HttpErrorResponse;
  loading: boolean;
  loaded: boolean;
}

//create initial couner state
export const dataInitialState: TodoData = {
  todos: [],
  error: null,
  loading: false,
  loaded: false,
};

//create reducer and export if to be used in app module
export const todoDataReducer = createReducer(
  dataInitialState,
  on(loadTodoStart, (state) => ({
    ...state,
    loading: true,
  })),
  on(loadTodoSuccess, (state, payload) => ({
    ...state,
    todos: payload.todos,
    loading: false,
    loaded: true,
  })),
  on(loadTodoFailed, (state, payload) => ({
    ...state,
    error: payload.error,
    loading: false,
    loaded: true,
  }))
);
