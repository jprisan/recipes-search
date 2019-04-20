import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  getRecipes() {
    return this.http.get('http://localhost:4200/api/');
  }

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
