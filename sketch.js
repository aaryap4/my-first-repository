
var box;
function setup() {
  createCanvas(400,400);
  box = createSprite (200,200,15,15)
}

function draw() 
{
  background(30);
drawSprites()

if (keyDown("right")){
  box.x=box.x+2
}
  if (keyDown("left")){
    box.x=box.x-2
  }
  if (keyDown("up")){
    box.y=box.y-2
  }
  if (keyDown("down")){
    box.y=box.y+2
  }
}

3


