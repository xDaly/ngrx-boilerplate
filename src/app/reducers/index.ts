import { counterReducer } from './counter.reducer';
import { loginReducer } from './login.reducer';
import { todoDataReducer } from './data.reducer';

export * from './counter.reducer';
export * from './login.reducer';
export * from './data.reducer';

//exported reducers will be added in an abject to be injected into the app module
export const REDUCERS = {
  loginReducer,
  counterReducer,
  todoDataReducer
};
