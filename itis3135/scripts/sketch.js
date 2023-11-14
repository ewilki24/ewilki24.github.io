function setup() {
    createCanvas(1100, 700);
    noLoop();
}
  
function draw() {
    if (mouseIsPressed) {
      fill(0);
    } else {
      fill(255);
    }
    ellipse(mouseX, mouseY, 40, 40);
}

function mousePressed() {
    loop();
}

function mouseReleased() {
    noLoop();
}