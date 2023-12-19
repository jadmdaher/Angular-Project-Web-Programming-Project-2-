import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ApiTestingComponent } from './api-testing/api-testing.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, ApiTestingComponent, MovieDetailsComponent, ApiTestComponent, MoviesComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  selectedGenre: number = 0; // Initialize selectedGenre property
  movies: any[] = [];

  constructor() {
    // Constructor logic here
  }

  onGenreSelected(genreId: number): void {
    this.selectedGenre = genreId;
  }
}
