function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
	
//background("white");


var ellipseWidth = random(900);

var ellipseHeight = random(900);

fill("blue");
ellipse(ellipseWidth, ellipseHeight, ellipseWidth, ellipseHeight);

}

