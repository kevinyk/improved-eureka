import { Component, OnInit } from '@angular/core';
import { PlayersService } from './../../players.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  allPlayers: any[];
  constructor(private _playersService:PlayersService) { }
  getAllPlayers(){
  	this._playersService.getPlayers()
  	.then((data)=>{
  		console.log(data);
  		this.allPlayers = data;
  	})
  	.catch((error)=>{
  		console.log(error);
  	})
  }
  ngOnInit() {
  	this.getAllPlayers();
  }
  deletePlayer(playerId){
  	this._playersService.delete(playerId)
  	.then((data)=>{
  		console.log(data);
  		this.getAllPlayers();
  	})
  	.catch((error)=>{
  		console.log(error);
  	})
  }

}
