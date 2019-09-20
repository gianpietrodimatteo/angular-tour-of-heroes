import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; // <-- NgModel lives here

// Some of the metadata is in the @NgModule decorators.
@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent //Every component must be declared in exactly one NgModule.
  ],
  imports: [
    BrowserModule,
    FormsModule, // Then add FormsModule to the @NgModule metadata's imports array.
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
