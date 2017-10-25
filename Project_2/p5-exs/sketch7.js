var sourceText = "CCA goes by in a FLASH !!!";
function setup() {
  createCanvas(400, 400);
  frameRate(10);
}
function draw() {
  background(50);
  fill(255);
  textSize(32);
  textAlign(CENTER, CENTER);
  var middle = sourceText.length / 2;
  var left = middle - ((mouseX / width) * middle);
  var right = middle + ((mouseX / width) * middle);
  text(
    sourceText.substring(left, right+1),
    width/2, height/2);
}
