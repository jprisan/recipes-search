import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//
export interface Recipe {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
  idx?: number;
}

@Injectable()
export class RecipeService {

  private recipes: Recipe[];

  constructor(private http: HttpClient) {
    console.log('servicio listo para usar');
  }

  // llamada a la api mediante metedo get, para obtener las recetas para la home.
  getRecipes() {
    return this.http.get('http://localhost:4200/api/');
  }

  // llamada a la api mediante metedo get, para obtener las recetas para la busqueda.
  getRecipesParams(termino: string) {
    return this.http.get(`http://localhost:4200/api/?q=${termino}`);
  }

}
