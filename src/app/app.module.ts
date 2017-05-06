import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes }   from '@angular/router';

import { AppComponent } from './app.component';
import { NinjasComponent } from './ninjas/ninjas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/ninjas',
    pathMatch: 'full'
  },
  {
    path: 'ninjas',
    component: NinjasComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NinjasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
