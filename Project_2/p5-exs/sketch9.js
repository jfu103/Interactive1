var seaRoseLines;
var sourceText = "JUSTIN_BEEBER_!!!!!!! What do you mean? ohh ohh ohh When you nod your head yes But you wanna say no What do you mean?";
var seaRoseLines = sourceText.split(" ");
function setup() {
  createCanvas(220, 500);
}
function draw() {
  background(50);
  textSize(16);
  noStroke();
  textAlign(LEFT, TOP);
  for (var i = 0; i < seaRoseLines.length; i++) {
    var words = seaRoseLines[i].split(" ");
    var currentOffset = 0;
    for (var j = 0; j < words.length; j++) {
      var wordWidth = textWidth(words[j]);
      fill(128+(i*10), 50, 250);
      rect(25+currentOffset, 25+i*20,
        wordWidth, 16);
        if (mouseIsPressed) {
  fill(255);
  text(words[j], 25+currentOffset, 25+i*20);
}
      // four pixels between words
      currentOffset += wordWidth + 4;
    }
  }
}
