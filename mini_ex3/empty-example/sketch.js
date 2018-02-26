var value = 0;
var value2 = 0;
var value3 = 0;
var value4 = 5;
var value5 = 0;

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(100, 200, 300);
}

function draw() {
 noStroke();
 fill(value, value2, value3, 70);
 rect(0, 0, width, height);

//Throbbers
 if(mouseX>1000) {
  drawThrobber3(30) }
 else if(mouseX>500) {
  drawThrobber(20) }
 else if (mouseX>100) {
  drawThrobber2(15) }

//text
fill(255);
textSize(32);
textFont('Avenir');
textAlign(CENTER);
text('Click the screen', width/2, height*0.90);
text('Move the mouse', width/2, height*0.95);

//stars
ellipse(50,50,value4);
ellipse(609,113,value4);
ellipse(150,250,value4);
ellipse(750,350,value4);
ellipse(950,450,value4);
ellipse(1130, 111,value4);
ellipse(378, 462, value4);
ellipse(1326, 515, value4);

//sun
fill(240, 249, 51);
ellipse(1335, 75, value5);
 }

function drawThrobber(num) {
  push();
  fill(21, 175, 79);
  rect(windowWidth/2, windowHeight/2, 10, 300);
  fill(255);
  ellipse(windowWidth/2, windowHeight/2, 130);
  pop();

  push();
  frameRate (30);
  translate(width/2, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();

  if(mouseX > windowWidth/2) {
  fill(21, 133, 175); }
  else {
  fill(24, 188, 41); }

  ellipse(125, 20, 130, 50);
  pop();
}

function drawThrobber2(num) {
  push();
  fill(21, 175, 79);
  rect(windowWidth/5, windowHeight/2, 10, 300);
  fill(255);
  ellipse(windowWidth/5, windowHeight/2, 130);
  pop();

  push();
  frameRate (20);
  translate(width/5, height/2);
  var cir = 360/num*(frameCount%num);
  rotate(radians(cir));
  noStroke();

  if(mouseX > windowWidth/5) {
  fill(250, 250, 20); }
  else {
  fill(237, 9, 9); }

  ellipse(125, 20, 130, 50);
  //quad(150, 150, 90, 50, 180, 120, 30, 60);
  pop();
}

function drawThrobber3(num) {
    push();
    fill(21, 175, 79);
    rect(windowWidth*0.8, windowHeight/2, 10, 300);
    fill(255);
    ellipse(windowWidth*0.80, windowHeight/2, 130);
    pop();

    push();
    frameRate (45);
    translate(width*0.8, height/2);
    var cir = 360/num*(frameCount%num);
    rotate(radians(cir));
    noStroke();

    if(mouseX > windowWidth*0.8) {
    fill(177, 20, 250); }
    else {
    fill(238, 69, 186); }

    ellipse(125, 20, 130, 50);
    pop();
}

function mousePressed() {
  if (value === 0 && value2 === 0 && value3 === 0 && value4 === 5 && value5 === 0) {
    value = 150;
    value2 = 248;
    value3 = 254;
    value4 = 0
    value5 = 100
  } else {
    value = 0;
    value2 = 0;
    value3 = 0;
    value4 = 5;
    value5 = 0;
  }

console.log(mouseX, mouseY);
  }
