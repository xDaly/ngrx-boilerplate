import { createAction } from '@ngrx/store';


//create a new action with the given name and parameters 
export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');