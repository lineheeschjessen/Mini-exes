function setup() {
	createCanvas(1300, 725, WEBGL);
	noStroke();
}

function draw() {
	background(150,200,300);

	// Orange point light on the right
	pointLight(300, 100, 100, 0, 1000, 0);

	// Blue directional light from the left
	directionalLight(300, 150, 300, 100, 1000, 0);

	// Yellow spotlight from the front
	pointLight(100, 100, 700, 100, 100, 1000);

	rotateY(map(mouseX, 0, width, 0, PI));
	rotateX(map(mouseY, 0, height, 0, PI));
  ellipsoid(40, 40, 40);
  torus(150, 20);

  rotateY(map(mouseX, 1, width, -1, PI));
	rotateX(map(mouseY, 1, height, -1, PI));
  torus(150, 10);

  rotateY(map(mouseX, -1, width, -1, PI));
	rotateX(map(mouseY, -1, height, -1, PI));
  torus(150, 10);
}
