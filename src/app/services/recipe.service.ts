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

    // llamada a la api mediante metedo get, para obtener las recetas.
  getRecipes() {
    return this.http.get('http://localhost:4200/api/');
  }

  // compara las recetas dentro del array para encontrar coincidencias y muestra en pantalla de busqueda.
  searchRecipes(termino: string) {
    let recipesArr: Recipe[] = [];
    termino = termino.toLocaleLowerCase();
    for (let i = 0; i < this.recipes.length; i++) {
      let recipe = this.recipes[i];
      let titleReciple = recipe.title.toLocaleLowerCase();
      if (titleReciple.indexOf(termino) >= 0) {
        recipe.idx = i;
        recipesArr.push(recipe);
      }
    }
    return recipesArr;
  }
}
