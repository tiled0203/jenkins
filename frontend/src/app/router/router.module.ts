import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShipOverviewComponent} from '../components/ship-overview/ship-overview.component';

const routes: Routes = [
  { path: 'overview', component: ShipOverviewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
