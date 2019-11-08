import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.sass'],
})
export class PokemonListComponent implements OnInit {
  @Input() pokemen: Array<any>;

  /**
   * Event that emits an emtpy value.
   *
   * This event simply notifies the container component that an event
   * (a click in this case) happened.
   *
   */
  @Output() received: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}
}
