function setup() {
  createCanvas(400, 400);
}

function draw() {
  //make background
  background("#FBFFBF");

//back hair
noStroke();
  fill("#FF69B4");
ellipse(200,160, 230, 200);


push();
translate(0, 110);
triangle(100, 80, 300, 80, 200, 250);
pop();

push();
translate(0, 110);
triangle(100, 80, 280, 80, 230, 250);
pop();

push();
translate(0, 110);
triangle(100, 80, 280, 80, 150, 250);

pop();
push();
translate(0, 110);
triangle(100, 80, 280, 80, 180, 250);
pop();

pop();
push();
translate(0, 105);
triangle(100, 80, 280, 80, 280, 250);
pop();

pop();
push();
translate(-30, 75);
triangle(130, 80, 280, 80, 150, 250);

pop();
push();

translate(430, 0);
scale(-1, 1);

translate(-30, 75);
triangle(160, 80, 250, 80, 150, 250);

pop();

  //skin 
  fill(255,220,180);
  ellipse(200, 200, 200, 200);
 
 //eyes iris black
   fill(0);
  ellipse(140, 200, 30, 30);
  ellipse(250, 200, 30, 30);
 
 //lashes
fill(0); // Black eyelashes

// Left eye lashes
triangle(126, 190, 134, 190, 125, 180);
triangle(135, 186, 143, 186, 139, 175);
triangle(144, 190, 152, 190, 155, 180);

// Right eye lashes
triangle(236, 190, 244, 190, 235, 180);
triangle(245, 186, 253, 186, 249, 175);
triangle(254, 190, 262, 190, 265, 180);

 

// buck teeth
fill(255);
stroke(0);
strokeWeight(2);

//left tooth
rect(180, 250, 20, 20);

//right tooth
rect(200, 250, 20, 20);

//side bangs 
fill("#FF69B4");
noStroke();

push();

// change position
translate(-180, -150);

// triangles enlarged
scale(2);


triangle(135, 130, 220, 130, 150, 175);
triangle(140, 130, 240, 140, 175, 170);
triangle(180, 135, 245, 145, 205, 165);

pop();

//circle
ellipse(200, 110, 190, 50); 

//glasses
 push();
translate(20, 20);
 noFill();
  stroke(0);
  strokeWeight(3);

  //l eft lens
  rect(90, 150, 80, 65);

  // right lens
  rect(190, 150, 80, 65);

  // bridge 
  line(170, 170, 190, 170);

}
