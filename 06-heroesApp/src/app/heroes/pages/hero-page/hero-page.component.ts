import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, switchMap } from 'rxjs';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-page',
  templateUrl: './hero-page.component.html',
})
export class HeroPageComponent implements OnInit{

  public hero?: Hero;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroById( id ))
      ).subscribe( hero => {
        if ( !hero ) return this.router.navigate(['/heroes/list']);

        this.hero = hero;
        console.log({hero})
        return;
      })

  }

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router)
  {}

  public goBack(){
    this.router.navigateByUrl('heroes/list')
  }

}
