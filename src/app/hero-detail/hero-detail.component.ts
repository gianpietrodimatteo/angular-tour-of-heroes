import { Component, OnInit, Input } from "@angular/core";
import { Hero } from "../hero";
import { ActivatedRoute } from "@angular/router";
import { HeroService } from "../hero.service";
import { Location } from "@angular/common";

/*
The HeroDetailComponent needs a new way to obtain the hero-to-display. This section explains the following:

Get the route that created it
Extract the id from the route
Acquire the hero with that id from the server via the HeroService
*/

// Components should focus on presenting data and delegate data access to a service.
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.scss"]
})
export class HeroDetailComponent implements OnInit {
  /*
  The hero property must be an Input property,
  annotated with the @Input() decorator,
  because the external HeroesComponent will bind to it like this.
  */
  // https://angular.io/guide/template-syntax#inputs-outputs

  @Input() hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    /*
    The route.snapshot is a static image of the route information shortly after the component was created.
    The paramMap is a dictionary of route parameter values extracted from the URL.
    The "id" key returns the id of the hero to fetch.
    Route parameters are always strings.
    The JavaScript (+) operator converts the string to a number.
    */

    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  /*
  Add a goBack() method to the component class that navigates backward one step in
  the browser's history stack using the Location service that you injected previously.
  */
  //https://angular.io/api/common/Location
  //https://angular.io/tutorial/toh-pt5#hero-detail-ctor
  goBack(): void {
    this.location.back();
  }
}
