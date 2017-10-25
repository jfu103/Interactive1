
function setup() {
  createCanvas(400, 400);
	frameRate (2);
}
function draw() {
  var r = random(0,255)
  var g = random (0,255)
  var b = random (0,255)
  background(50);
  noStroke();
  fill(255);
  text("Hi, Interactive Class!", 50, 50);
  text("RandomX", r, 200);
  text("RandomY", 200, r);
	fill (r, g, b);
  text("Sooo random!", r, r);
}
