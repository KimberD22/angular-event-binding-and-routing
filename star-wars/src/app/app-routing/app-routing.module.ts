import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ShipsComponent } from "../ships/ships.component";
import { PlanetsComponent } from "../planets/planets.component";

const routes: Routes = [
  { path: 'ships', component: ShipsComponent },
  { path: 'planets', component: PlanetsComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
