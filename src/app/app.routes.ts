import { Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ApiTestComponent } from './api-test/api-test.component';
import { BindingTestComponent } from './binding-test/binding-test.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesComponent } from './movies/movies.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'binding-test',component: BindingTestComponent},
    { path: 'home', component: HomeComponent},
    { path: 'communication-test', component: ParentComponent },
    { path: 'api-test', component: ApiTestComponent },
    { path: 'movies', component: MoviesComponent},
    { path: 'movies-details', component: MovieDetailsComponent},
    // { path: '', pathMatch: 'full', redirectTo: 'home'}
];
