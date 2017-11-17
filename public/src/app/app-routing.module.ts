import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LogregComponent } from './logreg/logreg.component';
// import { SuccessComponent } from './success/success.component';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './players/list/list.component';
import { NewComponent } from './players/new/new.component';
import { StatusComponent } from './players/status/status.component';
import { GameStatusComponent } from './players/game-status/game-status.component';

const routes: Routes = [
  {
    path: 'players',
    component: PlayersComponent,
    children: [
    	{
    		path: 'list',
    		component: ListComponent
    	},
    	{
    		path: 'addplayer',
    		component: NewComponent
    	}
    ]
  },
  {
  	path: 'status',
  	component: StatusComponent,
  	children: [
    	{
    		path: 'game/:number',
    		component: GameStatusComponent
    	}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
