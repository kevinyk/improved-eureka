var Players = require('./../controllers/players.js');
var path = require('path');
var fs = require('fs');

module.exports = function(app){
	app.post('/players', Players.create);
	app.get('/players', Players.index);
	app.delete('/players/:id', Players.destroy);
	app.put('/players/:id', Players.changeStatus);
	// app.get('/users/current', Users.getCurrentUser);
	app.all("*", (req,res,next) => {
       res.sendFile(path.resolve("./public/dist/index.html"))
    });
}