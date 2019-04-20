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

  private recipes: Recipe[] = [
    {
      title: "Vegetable-Pasta Oven Omelet",
      href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
      ingredients: "tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper",
      thumbnail: "http://img.recipepuppy.com/560556.jpg"
    },
    {
      title: "Roasted Pepper and Bacon Omelet",
      href: "http://www.bigoven.com/43919-Roasted-Pepper-and-Bacon-Omelet-recipe.html",
      ingredients: "eggs, salt, black pepper, butter, black pepper, bacon, onions, garlic, roasted red peppers, oregano, black pepper",
      thumbnail: ""
    },
    {
      title: " Broccoli Oven Omelet Recipe ",
      href: "http://cookeatshare.com/recipes/broccoli-oven-omelet-92851",
      ingredients: "eggs, broccoli, onions, parmesan cheese, lowfat milk, salt, basil, garlic, tomato, parmesan cheese",
      thumbnail: ""
    },
    {
      title: "Eggplant Omelet with Coriander and Caraway",
      href: "http://www.epicurious.com/recipes/food/views/Eggplant-Omelet-with-Coriander-and-Caraway-306",
      ingredients: "caraway seed, coriander, eggplant, eggs, garlic, lemon, olive oil, onions, black pepper, salt",
      thumbnail: ""
    },
    {
      title: "Eggplant Omelet with Coriander And Caraway",
      href: "http://www.bigoven.com/143831-Eggplant-Omelet-with-Coriander-And-Caraway-recipe.html",
      ingredients: "eggplant, olive oil, onions, garlic, egg, caraway seed, coriander, salt, black pepper, lemon",
      thumbnail: ""
    },
    {
      title: "Broccoli and Cheese Omelet",
      href: "http://www.bigoven.com/45151-Broccoli-and-Cheese-Omelet-recipe.html",
      ingredients: "onions, garlic, chicken broth, cottage cheese, oregano, black pepper, egg substitute, bread, mozzarella cheese, butter",
      thumbnail: ""
    },
    {
      title: "Chard And Onion Omelet",
      href: "http://www.bigoven.com/149383-Chard-And-Onion-Omelet-recipe.html",
      ingredients: "olive oil, onions, leaves, garlic, eggs, parsley, basil, thyme, gruyere cheese, parmesan cheese",
      thumbnail: ""
    },
    {
      title: "Picnic Omelet Squares Recipe",
      href: "http://www.cdkitchen.com/recipes/recs/2184/Picnic-Omelet-Squares99498.shtml",
      ingredients: "eggs, garlic, parmesan cheese, olive oil, onions, peas, potato, red pepper, salt, tomato, zucchini",
      thumbnail: ""
    },
    {
      title: "Spanish Omelet",
      href: "http://www.cooks.com/rec/view/0,185,153160-249194,00.html",
      ingredients: "vegetable oil, green pepper, onions, water, milk, eggs, black pepper, mushroom, garlic, salt, chili powder",
      thumbnail: ""
    },
    {
      title: "Onion and Fresh Herb Omelet with Mixed Greens",
      href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=1622444",
      ingredients: "egg substitute, milk, parsley, thyme, salt, black pepper, eggs, flour, nonstick cooking spray, onions, garlic, salad greens, salad greens, red wine vinegar, olive oil, goat cheese, almonds",
      thumbnail: "http://img.recipepuppy.com/514820.jpg"
    },
    {
      title: "Ginger Champagne",
      href: "http://allrecipes.com/Recipe/Ginger-Champagne/Detail.aspx",
      ingredients: "champagne, ginger, ice, vodka",
      thumbnail: "http://img.recipepuppy.com/1.jpg"
    },
    {
      title: "Potato and Cheese Frittata",
      href: "http://allrecipes.com/Recipe/Potato-and-Cheese-Frittata/Detail.aspx",
      ingredients: "cheddar cheese, eggs, olive oil, onions, potato, salt",
      thumbnail: "http://img.recipepuppy.com/2.jpg"
    },
    {
      title: "Eggnog Thumbprints",
      href: "http://allrecipes.com/Recipe/Eggnog-Thumbprints/Detail.aspx",
      ingredients: "brown sugar, butter, butter, powdered sugar, eggs, flour, nutmeg, rum, salt, vanilla extract, sugar",
      thumbnail: "http://img.recipepuppy.com/3.jpg"
    },
    {
      title: "Succulent Pork Roast",
      href: "http://allrecipes.com/Recipe/Succulent-Pork-Roast/Detail.aspx",
      ingredients: "brown sugar, garlic, pork chops, water",
      thumbnail: "http://img.recipepuppy.com/4.jpg"
    },
    {
      title: "Irish Champ",
      href: "http://allrecipes.com/Recipe/Irish-Champ/Detail.aspx",
      ingredients: "black pepper, butter, green onion, milk, potato, salt",
      thumbnail: "http://img.recipepuppy.com/5.jpg"
    },
    {
      title: "Chocolate-Cherry Thumbprints",
      href: "http://allrecipes.com/Recipe/Chocolate-Cherry-Thumbprints/Detail.aspx",
      ingredients: "cocoa powder, baking powder, butter, eggs, flour, oats, salt, sugar, vanilla extract",
      thumbnail: "http://img.recipepuppy.com/6.jpg"
    },
    {
      title: "Mean Woman Pasta",
      href: "http://allrecipes.com/Recipe/Mean-Woman-Pasta/Detail.aspx",
      ingredients: "garlic, kalamata olive, olive oil, pepperoncini, seashell pasta, tomato",
      thumbnail: "http://img.recipepuppy.com/7.jpg"
    },
    {
      title: "Hot Spiced Cider",
      href: "http://allrecipes.com/Recipe/Hot-Spiced-Cider/Detail.aspx",
      ingredients: "allspice, apple cider, brown sugar, cinnamon, cloves, nutmeg, orange, salt",
      thumbnail: "http://img.recipepuppy.com/8.jpg"
    },
    {
      title: "Isa's Cola de Mono",
      href: "http://allrecipes.com/Recipe/Isas-Cola-de-Mono/Detail.aspx",
      ingredients: "cinnamon, cloves, instant coffee, milk, rum, vanilla extract, water, sugar",
      thumbnail: "http://img.recipepuppy.com/9.jpg"
    },
    {
      title: "Amy's Barbecue Chicken Salad",
      href: "http://allrecipes.com/Recipe/Amys-Barbecue-Chicken-Salad/Detail.aspx",
      ingredients: "barbecue sauce, chicken, cilantro, lettuce, ranch dressing, lettuce, tomato",
      thumbnail: "http://img.recipepuppy.com/10.jpg"
    }
  ];

  constructor(private http: HttpClient) {
    console.log('servicio listo para usar');
  }
  // working in local mode
  // getRecipes(): Recipe[] {
  //   console.log(this.recipes, 'this.recipes')
  //   return this.recipes;
  // }

  // working from api
  getRecipes() {
    const headers = new HttpHeaders( '?=q' );
   return this.http.get('http://www.recipepuppy.com/api/', {headers});
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
