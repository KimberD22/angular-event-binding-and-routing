import { Component, OnInit } from '@angular/core';

import { ShipsService } from "../ships.service";

@Component({
  selector: 'app-ships',
  templateUrl: './ships.component.html',
  styleUrls: ['./ships.component.css']
})
export class ShipsComponent implements OnInit {

  constructor(private shipsService: ShipsService) { }

  ngOnInit(): void {
    this.getShips();
  }

  ships;
  getShips() {
    this.shipsService.getShips()
      .subscribe(data => {
        console.log(data);
        this.ships = data;
      })
  }

}
