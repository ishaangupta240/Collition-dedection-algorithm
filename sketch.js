var Rectangle, rectangle1


function setup() {
  createCanvas(800,400);
  Rectangle = createSprite(400,100,50,80);
  Rectangle.shapeColor = "green";
  rectangle1 = createSprite(400,200,80,30);
  rectangle1.shapeColor = "red";
}

function draw() {
  background(255,255,255);  
  Rectangle.x = World.mouseX;
  Rectangle.y = World.mouseY;
  if (Rectangle.x - rectangle1.x < Rectangle.width / 2 + rectangle1.width/2
    && rectangle1.x - Rectangle.x < rectangle1.width/2 + Rectangle.width/2
    && Rectangle.y - rectangle1.y < Rectangle.height / 2 + rectangle1.height/2
    && rectangle1.y - Rectangle.y < rectangle1.height/2 + Rectangle.height/2) {
      Rectangle.shapeColor = "blue";
      rectangle1.shapeColor = "yellow";
    }
  else {
    Rectangle.shapeColor = "green";
    rectangle1.shapeColor = "red";
  }
  
  
  
  drawSprites();
}