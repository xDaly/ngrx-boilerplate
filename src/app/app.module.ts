import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from './containers/counter/counter.component';
import { LoginComponent } from './containers/login/login.component';
import { REDUCERS } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CounterComponent,
    LoginComponent,
    HttpClientModule,
    RouterModule,
    StoreModule.forRoot(REDUCERS),
    EffectsModule.forRoot(EFFECTS),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
