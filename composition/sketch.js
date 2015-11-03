function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
	// place your drawing code here
//	background("grey");
//	fill(10,50,50);
//	noFill();
//	triangle(40,40,100,100,20,120);
//	fill("green");
//		stroke("blue");
//	line(0,0,150,200);
//		line(0,0,width,height);
//	strokeWeight(10);
//	ellipse(100,100,40,80);
//	point(200,100);
//	rect(200,200,70,70);
//	fill("red");
//	rect(150,150,150,70,20);
//			noFill();
  //  quad(100,100,150,170,200,270,120,180);


}

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
    background('hsl(150, 100%, 80%)')
    
    triangle(40,70,400,500,20,420);
            triangle(40,60,300,500,20,320);
                triangle(40,50,200,400,20,220);
                  triangle(40,40,400,500,20,120);

        triangle(40,70,100,400,20,420);
            triangle(40,60,100,300,20,320);
                triangle(40,50,100,200,20,220);
                  triangle(40,40,200,100,20,120);
    

}

// x position variable
var xpos = 0;
 
// speed variable
var speed = 2;
 

function draw() 
{
 
     background('hsl(150, 100%, 80%)')

  // set the fill color
  fill(255, 0, 0);
 
  // black outline
  stroke(0);
 
  // set the ellipse mode
  ellipseMode(CENTER);
 
  // increment x variable
  xpos = xpos + speed;
 
  // if the circle moves off screen, change the speed's polarity
  if((xpos > width) || (xpos < 0))
  {
    speed = speed * -1;
  }
 
  // draw a circle
  ellipse(xpos, 50, 25, 25);
  ellipse(xpos, 370, 25, 25);
  ellipse(xpos, 300, 25, 25);
  ellipse(xpos, 200, 25, 25);
  ellipse(xpos, 100, 25, 25);
  ellipse(xpos, 400, 25, 25);
  ellipse(xpos, 500, 25, 25);
  ellipse(xpos, 550, 25, 25);
  
  fill("white");
  
      triangle(40,70,400,500,20,420);
            triangle(40,60,300,500,20,320);
                triangle(40,50,200,400,20,220);
                  triangle(40,40,400,500,20,120);

        triangle(40,70,100,400,20,420);
            triangle(40,60,100,300,20,320);
                triangle(40,50,100,200,20,220);
                  triangle(40,40,200,100,20,120);
  
 
  
}

