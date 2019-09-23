import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";

/*
Class is annotated with the @Injectable() decorator.
This marks the class as one that participates in the dependency injection system.
The HeroService class is going to provide an injectable service,
and it can also have its own injected dependencies.
*/
// https://angular.io/guide/dependency-injection
/*
The @Injectable() decorator accepts a metadata object for the service,
the same way the @Component() decorator did for your component classes.
*/
@Injectable({
  /*
  You must make the HeroService available to the dependency injection system before
  Angular can inject it into the HeroesComponent by registering a provider.
  Registers a provider with the root injector for your service by including
  provider metadata.
  When you provide the service at the root level,
  Angular creates a single, shared instance of HeroService and injects
  into any class that asks for it.
  */
  // https://angular.io/guide/providers
  providedIn: "root"
})
export class HeroService {
  // Return the hard coded mock heroes
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Same as above, but with observables
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add("HeroService: fetched heroes");
    //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    return of(HEROES);
  }

  /*
  This is a typical "service-in-service" scenario:
  you inject the MessageService into the HeroService which is injected
  into the HeroesComponent.
  */
  constructor(private messageService: MessageService) {}
}
