var canvas, bgImage;
var gameState=0;
var playerCount;
var form, game, player;
var database, firebase;

function setup()
{
    canvas=createCanvas(400,400);
    
    database= firebase.database();
    game = new Game();
    game.getState();
    game.start();


}

function draw() 
{





}