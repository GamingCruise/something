var player,playerImage;
var ghost,ghostImage;
var coins,coinsImage;


function preload()
{
  playerImage=loadImage("images/coin.png")



}
function setup(){
  createCanvas(displayWidth,displayHeight);
  player=createSprite(400,200,20,20);
  ghost=createSprite(200,200,20,20)
  coins=createSprite(600,600,10,10)
  player.addImage(playerImage)
  player.scale=0.1;
}

function draw(){
   image===requestAnimationFrame.Image
  background("white");  
  if(keyDown("W")){
    player.velocityY=-5;
  }
  if(keyDown("S")){
    player.velocityY=5;
  }
  if(keyDown("A")){
    player.velocityX=-5
  
  }
  if(keyDown("D")){
    player.velocityX=5;
  }

  drawSprites();

} 