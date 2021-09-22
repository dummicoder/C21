var fixedRect, movingRect;
var gameobj1, gameobj2, gameobj3, gameobj4;

function setup() {
  createCanvas(1200, 800);

  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameobj1 = createSprite(100, 200, 50, 50);
  gameobj1.shapeColor = "green";

  gameobj2 = createSprite(200, 200, 50, 50);
  gameobj2.shapeColor = "green";

  gameobj3 = createSprite(300, 200, 50, 50);
  gameobj3.shapeColor = "green";

  gameobj4 = createSprite(400, 200, 50, 50);
  gameobj4.shapeColor = "green";
}

function draw() {
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  // function call
  if (isTouching(gameobj2, movingRect)) {                  //arguments
    movingRect.shapeColor = "yellow";
    gameobj2.shapeColor = "yellow";
  }
  else if(isTouching(gameobj4, movingRect)){
    movingRect.shapeColor = "yellow";
    gameobj4.shapeColor = "yellow";
  }

   else {
    movingRect.shapeColor = "green";
    gameobj2.shapeColor = "green";
    gameobj4.shapeColor = "green";

  }
  drawSprites();
}
