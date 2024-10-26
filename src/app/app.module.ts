import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { TestymonialsComponent } from './components/testymonials/testymonials.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WorkComponent,
    AboutusComponent,
    RecipesComponent,
    TestymonialsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
