import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { PlayersService } from './players.service';

import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { NewComponent } from './players/new/new.component';
import { StatusComponent } from './players/status/status.component';
import { GameStatusComponent } from './players/game-status/game-status.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersComponent,
    ListComponent,
    NewComponent,
    StatusComponent,
    GameStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [PlayersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
