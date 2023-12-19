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

  public getMoviesByGenre(genre_id: number): Observable<any[]> {
    let listMoviesEndPoint = 'discover/movie?include_adult=false&include_video=false&language=en-US&page=pageNum&sort_by=popularity.desc&with_genres=' + genre_id;
    let moviesObservable: Observable<any[]>;
    const dynamicFieldName:any = 'movies';
    moviesObservable = this.httpClient.get<any[]>(this.apiBaseUrl + listMoviesEndPoint, this.httpOptions);
    return moviesObservable.pipe( map((data) => data[dynamicFieldName]));
  }

  public getMovieDetails(movieId: number): Observable<any> {
    let movieDetailsEndPoint = 'movie/' + movieId;
    let movieDetailsObservable: Observable<any>;
    const dynamicFieldName:any = 'movieDetails';
    movieDetailsObservable = this.httpClient.get<any>(this.apiBaseUrl + movieDetailsEndPoint, this.httpOptions);
    return movieDetailsObservable.pipe( map((data) => data[dynamicFieldName]));
  }

  public getMovieImages(movieId: number): Observable<any[]> {
    let movieImagesEndPoint = 'movie/' + movieId + '/images';
    let movieImagesObservable: Observable<any[]>;
    const dynamicFieldName:any = 'movieImages';
    movieImagesObservable = this.httpClient.get<any[]>(this.apiBaseUrl + movieImagesEndPoint, this.httpOptions);
    return movieImagesObservable.pipe( map((data) => data[dynamicFieldName]));
  }

  public getMovieTitle(movieId: number): Observable<any> {
    let movieTitleEndPoint = 'movie/' + movieId;
    let movieTitleObservable: Observable<any>;
    const dynamicFieldName:any = 'movieTitle';
    movieTitleObservable = this.httpClient.get<any>(this.apiBaseUrl + movieTitleEndPoint, this.httpOptions);
    return movieTitleObservable.pipe( map((data) => data[dynamicFieldName]));
  }

  public getReleaseDates(movieId: number): Observable<any[]> {
    let releaseDatesEndPoint = 'movie/' + movieId + '/release_dates';
    let releaseDatesObservable: Observable<any[]>;
    const dynamicFieldName:any = 'releaseDates';
    releaseDatesObservable = this.httpClient.get<any[]>(this.apiBaseUrl + releaseDatesEndPoint, this.httpOptions);
    return releaseDatesObservable.pipe( map((data) => data[dynamicFieldName]));
  }
}
