import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    MoviesComponent,
  ],
  bootstrap: []
})
export class AppModule { }