import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  constructor(private http: HttpClient) { }

  getPopularCocktails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/filter.php?c=Ordinary_Drink`);
  }
}
