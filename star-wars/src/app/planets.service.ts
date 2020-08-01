import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
// import { Observable, throwError } from 'rxjs';
// import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private planetsUrl = 'https://swapi.dev/api/planets';

  constructor(private http: HttpClient) { }

  getPlanets() {
    return this.http.get(this.planetsUrl);
  }
}
