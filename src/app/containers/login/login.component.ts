import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { login } from 'src/app/actions/login-page.action';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData: Observable<number>;
  constructor(private store: Store<any>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.loginData = this.store.select('login');
  }
  onSubmit() {
    this.store.dispatch(login({ username: 'username', password: 'password' }));
  }
}
