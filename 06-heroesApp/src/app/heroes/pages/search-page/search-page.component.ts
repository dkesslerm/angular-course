import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroesService } from '../../services/heroes.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { AppRoutingModule } from '../../../app-routing.module';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'heroes-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl();
  public heroes: Hero[] = [];
  public selectedHero?: Hero;

  constructor(
    private heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ){}

  searchHero(): void{
    const value: string = this.searchInput.value || '';

    this.heroesService.getSuggestions( value )
      .subscribe( heroes => this.heroes = heroes );
  }

  public onSelectedOption(event: MatAutocompleteSelectedEvent): void{
    if (!event.option.value){
      this.selectedHero = undefined;
      return;
    }

    const hero: Hero = event.option.value;
    this.searchInput.setValue( hero.superhero );

    this.selectedHero = hero;

    this.router.navigateByUrl(`heroes/${this.selectedHero.id}`)
  }
}
