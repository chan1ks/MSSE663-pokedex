import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../shared/services/pokemon.service';
import * as $ from 'jquery';
import { of, Observable } from 'rxjs';
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.sass']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() pokemonID: string;
  private pokemon$: Observable<Pokemon>;

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
}
