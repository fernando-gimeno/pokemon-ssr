import { TestBed, waitForAsync } from '@angular/core/testing';
import { routes } from './app.routes';
import { provideRouter, Router } from '@angular/router';
import { Location } from '@angular/common';

describe('App Routes', () => {
  let router: Router;
  let location: Location;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideRouter(routes)],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should navigate to "AboutPage" redirects to "/about"', async () => {
    await router.navigate(['about']);
    expect(location.path()).toBe('/about');
  });

  it('should navigate to "PricingPage" redirects to "/pricing"', async () => {
    await router.navigate(['pricing']);
    expect(location.path()).toBe('/pricing');
  });

  it('should navigate to "ContactPage" redirects to "/contact"', async () => {
    await router.navigate(['contact']);
    expect(location.path()).toBe('/contact');
  });

  it('should navigate to "PokemonPage" redirects to "/pokemons/page/1"', async () => {
    await router.navigate(['pokemons/page/1']);
    expect(location.path()).toBe('/pokemons/page/1');
  });

  it('should navigate to "PokemonPage" redirects to "/pokemons/pikachu"', async () => {
    await router.navigate(['pokemons/pikachu']);
    expect(location.path()).toBe('/pokemons/pikachu');
  });

  it('any non-existent route redirects to "/about"', async () => {
    await router.navigate(['fakeRoute']);
    expect(location.path()).toBe('/about');
  });

  it('should load the proper component', async () => {
    // Load the about component
    const aboutRoute = routes.find((route) => route.path === 'about')!;
    expect(aboutRoute).toBeDefined();

    const aboutComponent = await aboutRoute.loadComponent!() as any;

    expect(aboutComponent.name).toBe('AboutPageComponent');

    // Load the pokemon component
    const pokemonRoute = routes.find((route) => route.path === 'pokemons/page/:page')!;
    expect(pokemonRoute).toBeDefined();

    const pokemonComponent = await pokemonRoute.loadComponent!() as any;

    expect(pokemonComponent.name).toBe('PokemonsPageComponent');
  });
});
