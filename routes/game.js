var express = require('express');
const EventBroker = require("../bin/eventBroker");
var router = express.Router();

const GAMES = new EventBroker()
GAMES.data = {}


function gameObject(id) {
    return {
        id,
        players: [],
        started: false
    }
}

router.get('/', function(req, res, next) {
    res.render('game/index', { title: 'Game' });
});

router.get('/join', function(req, res, next) {
    res.render('game/join', { title: 'JoinGame' });
});

router.get('/lobby/:gameId', function(req, res, next) {
    let gameId = req.params.gameId
    res.render('game/lobby', { title: 'JoinGame' });
});

router.get('/new/:gameId', function(req, res, next) {
    let gameId = req.params.gameId

    if (Object.keys(GAMES.data).includes(gameId)){
        res.redirect("/?errors=['GameAlreadyExists']")
    }else{
        GAMES.data[gameId] = gameObject(gameId)
        GAMES.trigger("game/newGame", {id:GAMES.data[gameId]})
    }
    res.redirect("/lobby/" + gameId)
});


module.exports = {gameRouter:router, router, GAMES};