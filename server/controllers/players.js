var mongoose = require('mongoose');
var Player = mongoose.model('Player');
module.exports = {
	create: (req,res)=>{
		console.log("hit create");
		// res.json({message: "Players.create dummy response"})
		var newPlayer = new Player(req.body)
		newPlayer.save((err, savedPlayer)=>{
			if(err){
				console.log("you did bad");
				res.json(err);
			}else{
				console.log("saved new player");
				res.json(newPlayer);
			}
		})
	},
	index: (req,res)=>{
		console.log("hit index");
		Player.find({}, (err, foundPlayers)=>{
			console.log("found players");
			res.json(foundPlayers);
		})
	},
	destroy: (req,res)=>{
		console.log("hit destroy");
		Player.remove({_id: req.params.id}, (err)=>{
			if(err){
				console.log("what did you do...");
				res.json(err);
			}else{
				console.log("deleted a player");
				res.json("deleted a player");
			}
		})
	},
	changeStatus: (req,res)=>{
		console.log("hit changeStatus");
		var updateObject = {};
		updateObject['game'+req.body.number+'Status'] = req.body.status;
		Player.update({_id: req.body._id}, updateObject, function(err, updatedPlayer){
			if(err){
				console.log("what did you do...");
				res.json(err);
			}else{
				console.log("updated a player");
				res.json(updatedPlayer);
			}
		})
	}
}