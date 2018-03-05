var video;
var button;
var snapshots = [];
var value = 50;
var value2 = 236;
var value3 = 242;

function setup() {
  createCanvas(638, 360);
  background(51);
  video = createCapture(VIDEO);
  video.size(638, 360);
  button = createButton('capture');
  button.mousePressed(takesnap);
}

function takesnap() {
  tint(value, value2, value3);
  snapshots.push(video.get());
  //image(video, 0, 0);

  }


function draw() {
  var w = 213;
  var h = 120;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {
    image(snapshots[i], x, y, w, h);
    x = x + w;
    if (x > width) {
      x = 0;
      y = y + h;
      }
    if (y === height) {
      x = 0;
      y = 0;
      fill(51);
      rect(0, 0, 638, 360);
      }

  //image(video, 0, 0);
}
}

function mousePressed() {
  if (value === 50 && value2 === 236 && value3 === 242) {
    value = 250;
    value2 = 100;
    value3 = 50;
}
    else {
    value = 50;
    value2 = 236;
    value3 = 242;
  }
  }
