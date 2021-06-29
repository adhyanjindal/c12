var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage

function preload(){

  appleImage=loadImage("apple.png");
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);




spawnApple();







  drawSprites();
}

function spawnApple(){
  if(frameCount%70===0){
    apple=createSprite(100,150,40,10)
    apple.addImage(appleImage);
    apple.scale=0.1;
    apple.velocityY=-7;

    apple.lifetime=170;

  }
    
}