import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ShipsService {
  private shipsUrl = 'https://swapi.dev/api/starships';
  constructor(private http: HttpClient) { }

  // getConfig() {
  //   return this.http.get(this.shipsUrl);
  // }

  getShips() {
    return this.http.get(this.shipsUrl);
  }
}
