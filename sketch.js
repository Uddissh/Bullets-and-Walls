var bullet1, bullet2, bullet3;
var thickness1, thickness2, thickness3;
var wall1, wall2, wall3;
var speed1, speed2, speed3;
var weight1, weight2, weight3;
var damege1, damage2, damage3;

function setup() {
  createCanvas(1600,800);
  
  bullet1 = createSprite(100, 100, 50, 10);
  bullet2 = createSprite(100, 200, 50, 10);
  bullet3 = createSprite(100, 300, 50, 10);

  wall1 = createSprite(1350, 100, 10, 50);
  wall2 = createSprite(1350, 200, 10, 50);
  wall3 = createSprite(1350, 300, 10, 50);

  thickness1 = random(22, 83);
  thickness2 = random(22, 83);
  thickness3 = random(22, 83);

  speed1 = random(223, 321);
  speed2 = random(223, 321);
  speed3 = random(223, 321);

  weight1 = random(30, 52);
  weight2 = random(30, 52);
  weight3 = random(30, 52);

  bullet1.shapeColor = "white";
  bullet2.shapeColor = "white";
  bullet3.shapeColor = "white";

  wall1.shapeColor = "lightblue";
  wall2.shapeColor = "lightblue";
  wall3.shapeColor = "lightblue";

  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;

}

function draw() {
  background(80,80,80);
  
  hasCollided1();
  hascollided2();

  drawSprites();
}

function hasCollided1(bullet1, ball1) {

  bullet1RightEdge = bullet1.x + bullet1.width;
  wall1LeftEdge = wall1.x;

  if (bullet1RightEdge >= wall1LeftEdge) {
    return true;
  }
    return false;
}

function hascollided2(bullet2, wall2) {

  bullet2RightEdge = bullet2.x + bullet2.width;
  wall2LeftEdge = wall2.x

  if (bullet2RightEdge >= wall2LeftEdge) {
    return true;
  }
    return false;
}

function hasCollided3() {

  bullet3RightEdge = bullet3.x + bullet1.width;
  wall3LeftEdge = wall3.x;

  if (bullet3RightEdge >= bullet3LeftEdge) {

    return true;

  }
    return false;
}