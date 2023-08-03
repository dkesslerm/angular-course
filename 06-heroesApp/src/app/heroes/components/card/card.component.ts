import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'heroes-hero-card',
  templateUrl: './card.component.html',
})
export class HeroCardComponent implements OnInit{

  ngOnInit(): void {
    if ( !this.hero )
      throw new Error('Hero property is required');
  }

  @Input()
  public hero!: Hero;

}
