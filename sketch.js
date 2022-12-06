
function preload(){
  seaImg = loadImage("sea.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(4168,1667);
  var sea = createSprite(200,400,400,150);
  sea.addImage("sea", seaImg);

  var ship = createSprite(400,300,50,50);
  ship.addAnimation("ship",shipImg1);
  


  
}

function draw() {
  background("blue");

  
    drawSprites();

 
}
