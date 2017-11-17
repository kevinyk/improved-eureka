import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PlayersService {

  constructor(private _http: Http) { }
  addPlayer(aPlayer){
  	return this._http.post('/players', aPlayer)
  	.map(Response=>Response.json()).toPromise();
  }
  getPlayers(){
  	return this._http.get('/players')
  	.map(Response=>Response.json()).toPromise();
  }
  delete(pId){
  	return this._http.delete('/players/'+pId)
  	.map(Response=>Response.json()).toPromise();
  }
  changeStatus(playerObj){
    return this._http.put('/players/'+playerObj._id, playerObj)
    .map(Response=>Response.json()).toPromise();
  }
}
