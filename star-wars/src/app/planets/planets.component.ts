import { Component, OnInit } from '@angular/core';

import { PlanetsService } from "../planets.service";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  constructor(private planetsService: PlanetsService) { }

  ngOnInit(): void {
    this.getPlanets();
  }

  planets;
  getPlanets() {
    this.planetsService.getPlanets()
      .subscribe(data => {
        console.log(data);
        this.planets = data;
      })
  }

}
