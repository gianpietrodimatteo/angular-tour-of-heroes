import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HEROES } from "../mock-heroes";

/*
The CLI generated three metadata properties:

selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles.
*/
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.scss"]
})
export class HeroesComponent implements OnInit {
  // Commented hero out to not display the hero details page on load
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // };

  heroes = HEROES;

  // selectedHero: Hero = this.hero;
  selectedHero: Hero;
  /*
  Add the following onSelect() method, which assigns the clicked hero
  from the template to the component's selectedHero.*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor() {}

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
  // https://angular.io/guide/lifecycle-hooks#oninit
  // It's a good place to put initialization logic.

  ngOnInit() {}
}
