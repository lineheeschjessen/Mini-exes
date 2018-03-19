var value = 255;
var value2 = 255;
var value3 = 255;
var value4 = 115;
var value5 = 4;
var value6 = 44;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(value, value2, value3);
}

function draw(){
  translate(windowWidth/2,windowHeight/2);
  noStroke();
  noFill();
  frameRate(60);

//inner cirkles
  rotate(millis()/1000.0);
  ellipse(0, -50, 50, 100);

  stroke(230, 40, 10, 255);
  ellipse(50, 0, 100, 50);

  stroke(230, 10, 120, 255);
  ellipse(0, 50, 50, 100);

  stroke(255, 10, 240, 255);
  ellipse(-50, 0, 100, 50);

//mid cirkles
  rotate(millis()/1000.0);
  stroke(255, 80, 10, 100);

  ellipse(0, -100, 100, 200);
  stroke(230, 40, 10, 100);

  ellipse(100, 0, 200, 100);
  stroke(230, 10, 120, 100);

  ellipse(0, 100, 100, 200);
  stroke(255, 10, 240, 100);

  ellipse(-100, 0, 200, 100);

//outer cirkles
  rotate(millis()/5000.0);
  stroke(255, 80, 10, 100);

  ellipse(0, -200, 200, 400);
  stroke(230, 40, 10, 100);

  ellipse(100, 0, 200, 100);
  stroke(230, 10, 120, 100);

  ellipse(0, 200, 200, 400);
  stroke(255, 10, 240, 100);

 ellipse(-100, 0, 200, 100);

//outer dots
 for (var x = 350; x <= width; x += 10) {
  noStroke();
  fill(value4, value5, value6);
  ellipse(x, 200, 2, 2);
}
}

//change color of background
function mousePressed() {
  if (value === 255 && value2 === 255 && value3 === 255) {
    value = 115;
    value2 = 4;
    value3 = 44;
    value4 = 255;
    value5 = 255;
    value6 = 255;
  } else {
    value = 255;
    value2 = 255;
    value3 = 255;
    value4 = 115;
    value5 = 4;
    value6 = 44;
  }
  background(value,value2,value3);
    }
