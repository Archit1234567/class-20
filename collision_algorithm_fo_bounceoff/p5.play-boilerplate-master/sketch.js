var fR,mR;
var edges;
function setup() {
  createCanvas(800,800);
  fR = createSprite (200,100,50,80);
  fR.shapeColor = "red";
  fR.velocityY = 100;

  mR = createSprite (200,600,50,80);
  mR.shapeColor = "red";
  mR.velocityY = -100;
}

function draw() {
  background(255,255,255);
    if (mR.x - fR.x < fR.width/2 + mR.width/2
         && fR.x - mR.x < fR.width/2 + mR.width/2 ) {
           mR.velocityX = mR.velocityX * (-1);
           fR.velocityX = fR.velocityX * (-1);
         }
         if (mR.y - fR.y < fR.height/2 + mR.height/2
          && fR.y - mR.y < fR.height/2 + mR.height/2 ) {
            mR.velocityY = mR.velocityY * (-1);
            fR.velocityY = fR.velocityY * (-1);
            
          }
         

  edges = createEdgeSprites();

  mR.bounceOff (edges);
  fR.bounceOff (edges);
  drawSprites();
}