import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';

@NgModule({
  declarations: [PokemonDetailsComponent],
  imports: [CommonModule],
  exports: [PokemonDetailsComponent]
})
export class PokemonDetailsModule {}
