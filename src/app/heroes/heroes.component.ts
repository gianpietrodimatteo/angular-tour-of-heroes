import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

/*
The CLI generated three metadata properties:

selector— the component's CSS element selector
templateUrl— the location of the component's template file.
styleUrls— the location of the component's private CSS styles.
*/
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // Commented hero out to not display the hero details page on load
  // hero: Hero = {
  //   id: 1,
  //   name: "Windstorm"
  // };

  heroes: Hero[];
  // TODO remove onSelect and selectedHero
  // selectedHero: Hero = this.hero;
  selectedHero: Hero;
  /*
  Add the following onSelect() method, which assigns the clicked hero
  from the template to the component's selectedHero.*/
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /*
  When Angular creates a HeroesComponent,
  the Dependency Injection system sets the heroService
  parameter to the singleton instance of HeroService.
  */
  // https://angular.io/guide/dependency-injection
  constructor(private heroService: HeroService) {
    // here you wire constructor parameters to properties
    // The constructor shouldn't ***do*** anything.
  }

  getHeroes(): void {
    // synchronous representation (would not work in real situation)
    // this.heroes = this.heroService.getHeroes();
    /*
    The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now.
    The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.
    */
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  // The ngOnInit() is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component.
  // https://angular.io/guide/lifecycle-hooks#oninit
  // It's a good place to put initialization logic.

  /*
  call getHeroes() inside the ngOnInit lifecycle hook and let Angular call ngOnInit()
  at an appropriate time after constructing a HeroesComponent instance.
  */
  // https://angular.io/guide/lifecycle-hooks
  ngOnInit() {
    this.getHeroes();
  }
  // When addHero() saves successfully, the subscribe() callback receives the new hero and pushes it into to the heroes list for display.
  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }
  // Although the component delegates hero deletion to the HeroService, it remains responsible for updating its own list of heroes.
  // The component's delete() method immediately removes the hero-to-delete from that list, anticipating that the HeroService will succeed on the server.

  // There's really nothing for the component to do with the Observable returned by heroService.delete() but it must subscribe anyway.
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
