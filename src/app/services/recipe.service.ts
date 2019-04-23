import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

// se define el objeto Recipe
export interface Recipe {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
  idx?: number;
}

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private recipes: Recipe[];

  constructor(private http: HttpClient) { }

  // llamada a la api mediante metedo get, para obtener las recetas para la home.
  getRecipes() {
    return this.http.get('http://localhost:4200/api/')
      .pipe(map((data: any) => {
        return data.results;
      }));
  }

  // llamada a la api mediante metedo get, para obtener las recetas para la busqueda.
  getRecipesParams(termino: string) {
    return this.http.get(`http://localhost:4200/api/?q=${termino}`)
      .pipe(map((data: any) => {
        return data.results;
      }));
  }

}
