import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipesService } from './recipes/recipes.sevice';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { NoRecipeSelectedComponent } from './recipes/no-recipe-selected/no-recipe-selected.component';

const appRoutes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  {path: 'recipes', component: RecipesComponent, children: [
    {path: '', component: NoRecipeSelectedComponent, pathMatch: 'full'},
    {path: ':id', component: RecipeDetailComponent}
  ]},
  {path: 'shopping', component: ShoppingListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NoRecipeSelectedComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    RecipesService,
    ShoppingListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
