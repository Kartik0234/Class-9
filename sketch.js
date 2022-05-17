var ball


function setup() {
  createCanvas(800,800);
  ball = createSprite(50,50,50,50);
}

function draw() 
{
  background(30);
if(keyIsDown(UP_ARROW)){
  ball.y-=10
}
  if(keyIsDown(DOWN_ARROW)){
    ball.y+=10
  }
    if(keyIsDown(LEFT_ARROW)){
      ball.x-=10
    }
      if(keyIsDown(RIGHT_ARROW)){
        ball.x+=10
}

drawSprites();
}




