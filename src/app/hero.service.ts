import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

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
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api
  // The heroes web API expects a special header in HTTP save requests.
  // That header is in the httpOptions constant defined in the HeroService.
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Return the hard coded mock heroes
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }
  // Same as above, but with observables
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes');
    // of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
    // return of(HEROES);
    /** GET heroes from the server */
    // of and http.get() return observable of hero so that's the same thing for the rest of the website
    return (
      this.http
        .get<Hero[]>(this.heroesUrl)
        // To catch errors, you "pipe" the observable result from http.get() through an RxJS catchError() operator.
        // The catchError() operator intercepts an Observable that failed.
        // It passes the error an error handler that can do what it wants with the error.
        .pipe(
          // RxJS tap() operator, which looks at the observable values, does something with those values, and passes them along.
          // The tap() call back doesn't touch the values themselves.
          tap(_ => this.log('fetched heroes')),
          catchError(this.handleError<Hero[]>('getHeroes', []))
        )
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    // Note the backticks ( ` ) that define a JavaScript template literal for embedding the id.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    // return of(HEROES.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  /*
  This is a typical "service-in-service" scenario:
  you inject the MessageService into the HeroService which is injected
  into the HeroesComponent.
  */
  constructor(
    private messageService: MessageService,
    // HttpClient methods return an RxJS Observable.
    // An HTTP request returns a single response.
    // In theory an observble can return multiple values.
    // In practice the HttpClient.get() method returns a single value as an untyped json for default.
    // You can optionaly specify the type with the <Class>.
    private http: HttpClient
  ) {}

  // Notice that you keep injecting the MessageService but since you'll call it so frequently, wrap it in a private log() method:
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  /** PUT: update the hero on the server */
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
  /** POST: add a new hero to the server */
  addHero(hero: Hero): Observable<Hero> {
    // It expects the server to generate an id for the new hero, which it returns in the Observable<Hero> to the caller.
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  // You still send the httpOptions.
  /** DELETE: delete the hero from the server */
  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  // The method returns immediately with an empty array if there is no search term.
  // The rest of it closely resembles getHeroes(), the only significant difference being the URL,
  // which includes a query string with the search term.
  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  // The following handleError() will be shared by many HeroService methods so it's generalized to meet their different needs.

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
