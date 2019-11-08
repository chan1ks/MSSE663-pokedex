import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [DashboardComponent, PokemonListComponent],
  exports: [DashboardComponent],
  imports: [CommonModule],
})
export class DashboardModule {}
