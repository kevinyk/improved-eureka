import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../../players.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-status',
  templateUrl: './game-status.component.html',
  styleUrls: ['./game-status.component.css']
})
export class GameStatusComponent implements OnInit {
  players: any[];
  gameNum: number;
  constructor(private _playersService: PlayersService, private _router: Router, private _route: ActivatedRoute) { }
  getAllPlayers(){
  	this._playersService.getPlayers()
	.then((data)=>{
		console.log(data);
		this.players = data;
	})
	.catch((error)=>{
		console.log(error);
	})
  }
  ngOnInit() {
  	this._route.paramMap.subscribe((params)=>{
  		console.log("game number", params.get('number'));
  		this.gameNum = parseInt(params.get('number'));
  		this.getAllPlayers();
  	})
  }
  changeStatus(playerId, gNum, newStatus){
  	this._playersService.changeStatus({_id: playerId, number: gNum, status: newStatus})
  	.then((data)=>{
		console.log(data);
		this.getAllPlayers();
	})
	.catch((error)=>{
		console.log(error);
	})
  }

}
