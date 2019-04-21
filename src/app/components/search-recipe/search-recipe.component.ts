import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {

  recipes: any[] = [];
  termino: string;
  loading: boolean;

  constructor(private recipeService: RecipeService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.recipeService.getRecipesParams(this.termino)
        .subscribe((data: any) => {
          this.recipes = data;
          this.loading = false;
        });
    });
  }

}
