import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  baseApiUrl :string = "https://api.themoviedb.org/3/";

//   const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzVkNDdlNDQzMDZiZjUzNGQwNDllMGE5ZWFiY2U5NiIsInN1YiI6IjY1ODBjNmYyM2E0OGM1NGNkZWFmNjkwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93Bpi_7K-dTtliuhH2g4NxPTz0HIlt9YP07-kf4Wx9k'
//     }
// };

httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzVkNDdlNDQzMDZiZjUzNGQwNDllMGE5ZWFiY2U5NiIsInN1YiI6IjY1ODBjNmYyM2E0OGM1NGNkZWFmNjkwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.93Bpi_7K-dTtliuhH2g4NxPTz0HIlt9YP07-kf4Wx9k'
    }
  )
};

  constructor(private httpClient: HttpClient) { }


  getGenresList():Observable<any[]>
  {
    let genresObs: Observable<any[]> ;
    let genresListEndPoint = "genre/movie/list?language=en";

    genresObs= this.httpClient.get<any[]>(this.baseApiUrl+genresListEndPoint,this.httpOptions);
    const dynamicFieldName:any = 'genres';

    return genresObs.pipe(map(data => data[dynamicFieldName]));
  }

  getMoviesList():Observable<any[]>
  {
    let moviesObs: Observable<any[]> ;
    let moviesListEndPoint = "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

    moviesObs= this.httpClient.get<any[]>(this.baseApiUrl+moviesListEndPoint,this.httpOptions);
    const dynamicFieldName:any = 'results';

    return moviesObs.pipe(map(data => data[dynamicFieldName]));
  }
}
