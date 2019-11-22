import { PokemonService } from '../services/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  pokemen$: Observable<any>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit() {
    this.pokemen$ = this.pokemonService.getAllPokemon();
  }
}
