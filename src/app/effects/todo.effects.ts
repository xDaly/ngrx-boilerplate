import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import {
  loadTodoFailed,
  loadTodoStart,
  loadTodoSuccess,
} from '../actions/todo.action';

@Injectable()
export class DataEffects {
  //import actions to listen to actions
  constructor(private actions$: Actions, private dataService: DataService) {}

  //create effect
  loadDatas$ = createEffect(() =>
    // pipe action to pass other functions
    this.actions$.pipe(
      // listen to selected action type
      ofType(loadTodoStart),
      // after dispatching action we call the service and fetch data and then dispatch another action and passs the data
      mergeMap(() =>
        this.dataService.getTodos().pipe(
          //dispatching an action with props have to contain the prop key 
          map((res: any) => loadTodoSuccess({ todos: res })),
          catchError((err) => of(loadTodoFailed(err)))
        )
      )
    )
  );
}
