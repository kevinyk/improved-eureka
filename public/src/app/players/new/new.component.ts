import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../../players.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newPlayer: object = {name: "", prefPos:""}
  constructor(private _playersService: PlayersService, private _router: Router) { }

  ngOnInit() {
  }
  onSubmit(){
  	console.log(this.newPlayer);
  	this._playersService.addPlayer(this.newPlayer)
  	.then((data)=>{
  		if(data.errors == undefined){
  			this._router.navigate(['players', 'list'])
  		}
  	})
  }

}
