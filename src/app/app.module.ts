import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routes
import { APP_ROUTING } from './app.routes';

// service
import { RecipeService } from './services/recipe.service';

// components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { SearchRecipeComponent } from './components/search-recipe/search-recipe.component';
import { LoadingComponent } from './components/shared/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RecipeCardComponent,
    SearchRecipeComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    APP_ROUTING,
    HttpClientModule,
  ],
  providers: [RecipeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
