import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HeroesComponent } from "./heroes/heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

/*
A typical Angular Route has two properties:

path: a string that matches the URL in the browser address bar.
component: the component that the router should create when navigating to this route
*/
const routes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  // parameterized route. The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
  { path: "detail/:id", component: HeroDetailComponent },
  { path: "heroes", component: HeroesComponent }
];

@NgModule({
  // Import and Configure
  /*
  The method is called forRoot() because you configure the router at the application's
  root level. The forRoot() method supplies the service providers and directives
  needed for routing, and performs the initial navigation based on the current
  browser URL.
  */
  imports: [RouterModule.forRoot(routes)],
  // Then export to be available throuout the app
  exports: [RouterModule]
})
export class AppRoutingModule {}
