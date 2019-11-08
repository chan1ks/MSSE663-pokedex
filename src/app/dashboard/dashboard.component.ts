import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
})
export class DashboardComponent implements OnInit {
  pokemen: Array<string>;

  constructor() {}

  ngOnInit() {
    this.pokemen = ['Charizard', 'Bulbasaur', 'Squirtle'];
  }
}
