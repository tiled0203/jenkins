import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {ShipOverviewComponent} from './components/ship-overview/ship-overview.component';
import {ShipsService} from './service/ships.service';

@NgModule({
  declarations: [
    AppComponent,
    ShipOverviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  providers: [ShipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
