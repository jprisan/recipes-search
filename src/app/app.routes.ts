import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
   { path: 'buscar/:termino', component: SearchRecipeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
