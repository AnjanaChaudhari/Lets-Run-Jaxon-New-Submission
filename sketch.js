var jake, jake_running;

function preload() {
  jake_running = loadAnimation("Jake1.png", "Jake2.png", "jake3.png", "jake4.PNG", "jake5.png");
  groundImage = loadImage("path.png");
  
}

function setup(){
  createCanvas(400,400);
  ground = createSprite(200, -100);
  ground.addAnimation("path", groundImage);
  ground.scale = 0.9;
  ground.velocityY = 8;
  ground.tint = 'white';

  jake = createSprite(200,300);
  jake.addAnimation("running", jake_running);
  jake.scale = 0.6;

  invisibleGround = createSprite(370, 200, 100, 400);
  invisibleGround.visible = false;
  
  invisibleGround2 = createSprite(40, 200, 100, 400);
  invisibleGround2.visible = false;
  
}

function draw() {
  background("white");
  if(ground.y >= 470) {
    ground.y = 5;
  }
  
  if(keyDown("left")) {
    jake.x = jake.x-6;
  } else if(keyDown("right")) {
      jake.x = jake.x+6;
  }
  
  jake.collide(invisibleGround);
  jake.collide(invisibleGround2);
  
  drawSprites();
  
}