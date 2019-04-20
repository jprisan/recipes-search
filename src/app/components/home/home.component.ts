import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

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
        this.recipes = data.results;
      });
  }

}
