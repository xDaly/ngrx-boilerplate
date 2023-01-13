import { createReducer, on } from '@ngrx/store';
import { login } from '../actions/login-page.action';


// declare state interface
export interface Login {
  username: string;
  password: string;
}

//create initial couner state
export const loginInitialState: Login = {
  username: '',
  password: '',
};

//create reducer and export if to be used in app module
export const loginReducer = createReducer(
  loginInitialState,
  on(login, (state, payload) => ({
    ...state,
    username: payload.username,
    password: payload.password,
  }))
);
