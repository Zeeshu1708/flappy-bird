var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


// load images

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeNorth = new Image();
var pipeSouth = new Image();

bird.src = "images/bird.png";
bg.src = "images/bg.png";
fg.src = "images/fg.png";
pipeNorth.src = "images/pipeNorth.png";
pipeSouth.src = "images/pipeSouth.png";

//some variables
var gap = 75;


function draw(){
    
    ctx.drawImage(bg,0,0);

    ctx.drawImage(pipeNorth,100,0);
    ctx.drawImage(pipeSouth,100,0+constant);
}
draw();
