import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../movies';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private baseApiUrl = 'https://my-data-4hkn.onrender.com/movies';//Json data is hosted on render server, so that site can be hosted on Netlify. 

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movies[]> {
    return this.http.get<Movies[]>(`${this.baseApiUrl}`);
  }

  updateMovie(movie: Movies): Observable<Movies> {
    const url = `${this.baseApiUrl}/${movie.id}`;
    return this.http.put<Movies>(url, movie, httpOptions);
  }

  addMovie(movie: Movies): Observable<Movies> {
    const url = `${this.baseApiUrl}`;
    return this.http.post<Movies>(url, movie, httpOptions);
  }
}
