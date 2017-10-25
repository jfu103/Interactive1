function setup() {
  createCanvas(400, 400);
}
function draw() {
  background(50);
  strokeWeight(2);
  fill(255, 142, 123);
  if (mouseIsPressed) {
    stroke(255, 142, 123);
    fill(50);
  }
  else {
    noStroke();
  }
  textSize(12 + (mouseY / width)*72);
  textAlign(CENTER);
  text("Look what you made me do!", 200, 200);
}
