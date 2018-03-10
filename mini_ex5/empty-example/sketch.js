//Collision detection and resolution
//move the mouse, the sprite responds to overlapings, collision,
//and displaces another sprite
let asteroid = [];
var asterisk, cloud, circle;
var collectibles;
var obstacles;

/*
function preload() {
  bg = loadImage("office.jpg");
} */

function setup() {
  createCanvas(windowWidth, windowHeight);

//classes
  asteroid[0] = new Asteroid(color(147,20,61), 8, 600, 100, 40); //create/construct a new object instance
  asteroid[1] = new Asteroid(color(147,20,61), 5, 800, 200, 50);
  asteroid[2] = new Asteroid(color(147,20,61), 7, 400, 300, 50); //create/construct a new object instance
  asteroid[3] = new Asteroid(color(147,20,61), 4, 200, 560, 60);
  asteroid[4] = new Asteroid(color(147,20,61), 3, 300, 600, 30);
  asteroid[5] = new Asteroid(color(147,20,61), 6, 500, 650, 20);
  asteroid[6] = new Asteroid(color(147,20,61), 9, 700, 700, 70);

//Sprites
  cloud = createSprite(600, 200);
  cloud.addAnimation("normal", "assets/cloud_breathing0001.png", "assets/cloud_breathing0009.png");

  asterisk = createSprite(200, 200);
  asterisk.addAnimation("normal", "assets/asterisk_normal0001.png", "assets/asterisk_normal0003.png");
  asterisk.addAnimation("round", "assets/asterisk_circle0006.png", "assets/asterisk_circle0008.png");

  obstacles = new Group();
  collectibles = new Group();

  for(var i=0; i<5; i++)
    {
    var box = createSprite(random(0, width), random(0,height));
    box.addAnimation("normal", "assets/box0001.png", "assets/box0003.png");
    obstacles.add(box);
    }

  for(var i=0; i<30; i++)
    {
    var dot = createSprite(random(0, width), random(0,height));
    dot.addAnimation("normal", "assets/small_circle0001.png", "assets/small_circle0001.png");
    collectibles.add(dot);
    }

}

function draw() {

 background(255,246,255);

//classes
  for (let i = 0; i < asteroid.length; i++) {
  asteroid[i].drive();
  asteroid[i].display();
   }

//background text
  fill(147,20,61);
  rect(windowWidth/2-500,windowHeight/2-90,1000,200);
  noStroke();
  textAlign(CENTER);
  textSize(35);
  fill(255);


//sprites movement
  asterisk.position.x = mouseX;
  asterisk.position.y = mouseY;

  asterisk.collide(obstacles);

  cloud.collide(obstacles);

  asterisk.displace(cloud);

  cloud.overlap(collectibles, collect)

//stay inside canvas
  if (cloud.position.x >= windowWidth)
    cloud.position.x = windowWidth/11;

  if (cloud.position.x <= 0)
    cloud.position.x = windowWidth*0.89;

  if(cloud.position.y >= windowHeight)
    cloud.position.y = windowHeight/7;

  if(cloud.position.y <= 0)
    cloud.position.y = windowHeight*0.85;

  drawSprites();

  text('The Green one´s job is to collect all the pink dots.', windowWidth/2, windowHeight/2);
  text('But he needs help to complete this task.', windowWidth/2, windowHeight/2+50);

}

//class function
class Asteroid {
  constructor(getcolor, speed, xpos, ypos, size) { //initalize the objects
    this.getcolor = getcolor;
    this.speed = speed;
    this.pos = new createVector(xpos, ypos);  //check this feature: https://p5js.org/reference/#/p5/createVector
    this.size = size;
  }

  drive() {
    this.pos.x+=this.speed;  //this.pos.x = this.pos.x + this.speed;
    if (this.pos.x > width) {
       this.pos.x = 0;
    }
  }

 display() {
   noStroke();
   fill(this.getcolor);
   ellipse(this.pos.x,this.pos.y,this.size,this.size);
 }
}

//collect function
function collect(collector, collected)
{
  collector.animation.rewind();
  collected.remove();
}
