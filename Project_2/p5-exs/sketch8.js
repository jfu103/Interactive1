var sourceText = "Put a bunch of words in different places";
var words = sourceText.split(" ");
function setup() {
  createCanvas(400, 400);
  noLoop();
}
function draw() {
  background(50);
  textSize(72);
  textAlign(CENTER, CENTER);
  for (var i = 0; i < words.length; i++) {
    fill(random(255));
    text(words[i], random(width), random(height));
  }
}
