import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieApiService } from '../services/movie-api.service';

class Genre {
  id:number;
  name:string;

  constructor(id:number, name:string){
    this.id=id;
    this.name=name;
  }
}

@Component({
  selector: 'app-api-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-test.component.html',
  styleUrl: './api-test.component.css'
})
export class ApiTestComponent {

  genresList: Genre[] = [];

  constructor(private movieApiService: MovieApiService) {
  }

  ngOnInit() {
    this.movieApiService.getGenres().subscribe(
      genres => { 
        this.genresList = genres;
        console.log('api fetched:',genres) 
      });
  }

}
