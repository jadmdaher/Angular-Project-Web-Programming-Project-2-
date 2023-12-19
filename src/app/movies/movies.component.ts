import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiService } from '../services/movie-api.service';

class Movies{
  id:number;
  title:string;
  overview:string;
  poster_path:string;

  constructor(id:number, title:string, overview:string, poster_path:string){
    this.id=id;
    this.title=title;
    this.overview=overview;
    this.poster_path=poster_path;
  }
}

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {
  
    moviesList: Movies[] = [];
  
    constructor(private movieApiService: MovieApiService) {
    }
  
    /*ngOnInit() {
      this.movieApiService.getMovies().subscribe(
        movies => { 
          this.moviesList = movies;
          console.log('api fetched:',movies) 
        });
    }*/

}
