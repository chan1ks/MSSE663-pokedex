import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../shared/services/pokemon.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonID: string;
  private pokemon$: Observable<Pokemon>;
  @ViewChild('favorites', {static: false}) myFavoriteButton: ElementRef;
  favorite = false;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.getPokemonByID();
  }

  getPokemonByID() {
    this.pokemon$ = this.pokemonService.getPokemonByIDString(
      this.route.snapshot.paramMap.get('id')
    );
    console.log(this.pokemon$);
  }

  toggleFavorites() {
    this.favorite = !this.favorite
    if(this.favorite) {
      this.myFavoriteButton.nativeElement.className="star-five-grey star-five-yellow";
    }
    else {
      this.myFavoriteButton.nativeElement.className="star-five-grey";
    }
  }
}