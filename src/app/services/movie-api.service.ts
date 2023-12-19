import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';



@Injectable({
  providedIn: 'root'
})

export class MovieApiService {
  private apiBaseUrl = 'https://api.themoviedb.org/3/';

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzVkNDdlNDQzMDZiZjUzNGQwNDllMGE5ZWFiY2U5NiIsInN1YiI6IjY1ODBjNmYyM2E0OGM1NGNkZWFmNjkwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93Bpi_7K-dTtliuhH2g4NxPTz0HIlt9YP07-kf4Wx9k'
      }
    )
  };

  constructor(private httpClient: HttpClient) {
  
  }

  public getGenres(): Observable<any[]> {
    let listGenreEndPoint = 'genre/movie/list?language=en';
    let genreObservable: Observable<any[]>;
    const dynamicFieldName:any = 'genres';
    genreObservable = this.httpClient.get<any[]>(this.apiBaseUrl + listGenreEndPoint, this.httpOptions);
    return genreObservable.pipe( map((data) => data[dynamicFieldName]));
  }

  /*public getMoviesByGenre(genreId: number): Observable<any[]> {
    let listMoviesByGenreEndPoint = 'discover/movie?with_genres=' + genreId;
    let moviesObservable: Observable<any[]>;
    const dynamicFieldName:any = 'results';
    moviesObservable = this.httpClient.get<any[]>(this.apiBaseUrl + listMoviesByGenreEndPoint, this.httpOptions);
    return moviesObservable.pipe( map((data) => data[dynamicFieldName]));
  }*/

  public getMovies(): Observable<any[]> {
    let listMoviesEndPoint = 'discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
    let moviesObservable: Observable<any[]>;
    const dynamicFieldName:any = 'movies';
    moviesObservable = this.httpClient.get<any[]>(this.apiBaseUrl + listMoviesEndPoint, this.httpOptions);
    return moviesObservable.pipe( map((data) => data[dynamicFieldName]));
  }

}
