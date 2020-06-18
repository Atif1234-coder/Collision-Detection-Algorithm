
var FixedRect , MovingRect 

function setup() {
  createCanvas(800,400);
  FixedRect = createSprite(400, 200, 50, 50);
  MovingRect = createSprite(200,150,50,100)
  FixedRect.shapeColor = "Orange"
  MovingRect.shapeColor = "Orange"
}

function draw() {
  background(0);
  MovingRect.x = mouseX
  MovingRect.y = mouseY
  if(MovingRect.x - FixedRect.x < MovingRect.width/2 + FixedRect.width/2
    && FixedRect.x - MovingRect.x < MovingRect.width/2 + FixedRect.width/2
    && MovingRect.y - FixedRect.y < MovingRect.height/2 + FixedRect.height/2
    && FixedRect.y - MovingRect.y < MovingRect.height/2 + FixedRect.height/2){
    FixedRect.shapeColor = "Pink"
  MovingRect.shapeColor = "Pink"
  }
  else{
    FixedRect.shapeColor = "Orange"
  MovingRect.shapeColor = "Orange"
  }
  drawSprites();
}