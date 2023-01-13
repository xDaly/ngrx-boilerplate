import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';
import { ITodo } from '../models/todo';

export const loadTodoStart = createAction('[todo/loadTodoStart]');
export const loadTodoSuccess = createAction(
  '[todo/loadTodoSuccess]',
  props<{ todos: ITodo[] }>()
);
export const loadTodoFailed = createAction(
  '[todo/loadTodoFailed]',
  props<{ error: HttpErrorResponse }>()
);
