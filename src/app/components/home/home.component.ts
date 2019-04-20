import { Component, OnInit } from '@angular/core';
import { RecipeService, Recipe } from 'src/app/services/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: any[] = [];

  constructor(private recipeService: RecipeService,
              private router: Router) { }

  ngOnInit() {

    this.recipeService.getRecipes()
      .subscribe((data: any) => {
        console.log(data.results);
        this.recipes = data.results;
      });
  }

}
