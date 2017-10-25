function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill(0, 40, 80);
    stroke(255, 255, 255);
  } else {
    fill(249, 163, 163);
    stroke(0, 0, 0);
  }
  ellipse(mouseX, mouseY, 80, 80);
}
