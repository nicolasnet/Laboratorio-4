import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';

import {FormsModule} from '@angular/forms';

import {RouterModule} from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{path: "", component: LoginComponent},{path: "error", component: ErrorComponent},{path: "Login/id", component: ErrorComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
