//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}//pasiLeaf
function pasiLeaff(){
beginShape();
strokeWeight(1);
stroke("white");
fill("black");
vertex(0, 0);
vertex(25, 0);
vertex(25, 50);
vertex(50, 50);
vertex(25, 25);
vertex(50, 25);
vertex(50, 0);
vertex(0, 50);
vertex(0, 25);
vertex(25, 25);
vertex(0, 0);
endShape(CLOSE);
}
//pasiLeafFlipped
function pasiLeaf(){
beginShape();
strokeWeight(1);
stroke("white");
fill("black");
beginShape();
vertex(0, 0);
vertex(50, 50);
vertex(50, 25);
vertex(25, 25);
vertex(25, 0);
vertex(50, 0);
vertex(0, 50);
vertex(25, 50);
vertex(25, 25);
vertex(0, 25);
endShape(CLOSE);
}
//flax
function flax(){
strokeWeight(1.8);
stroke("white");
line(50, 40, 75, 20);
line(50, 30, 75, 10);
line(50, 20, 75, 0);
line(50, 40, 75, 60);
line(56, 35, 75, 50);
line(62, 30, 75, 40);
}
//notch
function notch(){
strokeWeight(1);
stroke("white");
fill("black");
beginShape();
vertex(75, 0);
vertex(80, 5)
vertex(80, 15);
vertex(75, 20);
endShape(CLOSE);
}
//notch flipped
function bNotch(){
strokeWeight(1);
stroke("white");
fill("black")
beginShape();
vertex(75, 0);
vertex(70, 5);
vertex(70, 15);
vertex(75, 20);
endShape(CLOSE);
}
//smalltriangles
function tAngle(){
strokeWeight(1);
stroke("white");
fill("black");
triangle(150, 25, 140, 0, 160, 0);
}
//tripleline
function lines(){
  stroke("black");
  strokeWeight(2);
  line(67, 0, 67, 400);
  strokeWeight(3);
  line(71, 0, 71, 400);
  strokeWeight(2);
  line(75, 0, 75, 400);
}
//whitelines
function whiteLines(){
stroke("white")
strokeWeight(1);
line(145, 0, 145, 400);
strokeWeight(2);
line(149, 0, 149, 400);
strokeWeight(1);
line( 153, 0, 153, 400);

}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  rect(40 ,40, rect_width, rect_height);
}

  let bGround ="red"
  background(bGround);


///////////////////////////////////////////////////////////////////////
//left side

  //knotcolumn
  for(let aa = 0; aa <= 25; aa++){
    push();//new move from sensei phoebe san
    translate(-75, 20*aa);//teleportation jitsu, moves relative to where it was drawn
    notch();//summoning jitsu
    pop();//closing the jits so it doesn't affect the rest 

  };//two notches facing eachother
  for(let b = 0; b <= 25; b++){
    push();
    translate(-60, 20*b);
    bNotch();
    pop();
  };
///////////////////////////////////////////////////////////////////////
  //leftborder
  for(let a = 0; a <= 25; a++){
    push();
    translate(15, 50*a);
    pasiLeaff();
    pop();
  };
////////////////////////////////////////////////////////////////////////
  //3lines, just 3 black lines different weights
  translate(0,0);
  lines();
///////////////////////////////////////////////////////////////////////
  //flax
  for(let z = 0; z <= 50; z++){
  push();
  translate(29, 40*z);
  flax();
  pop();
  };
///////////////////////////////////////////////////////////////////////
  //notch borders
  for(let aa = 0; aa <= 25; aa++){
  push();
  translate(1, 20*aa);
  notch();
  pop();
  };
  //notches facing eachother bordering the "flax"
  for(let aa = 0; aa <= 25; aa++){
  push();
  translate(29, 20*aa);
  bNotch();
  pop();
  };

///////////////////////////////////////////////////////////////////////
push();
translate(40, 0);
lines();
pop();

for (let zz = 0; zz <= 25; zz++){
  push();
  translate(-22, 20*zz);
  scale(1, - 1);
  tAngle();
  pop();
};

push();
translate(-4, 0);
whiteLines();
pop();


///////////////////////////////////////////////////////////////////////

//flax column on the right
  for(let h = 0; h <= 25; h++){
  push();
  translate(250, 40*h);
  flax();
  pop();
  };

  for(let zaza = 0; zaza <= 25; zaza++){
    push();
    translate(222, 20*zaza);
    notch();
    pop();
  };

for (let wa = 0; wa <= 25; wa ++){
  push();
translate(249, 20*wa);
bNotch();
pop();
}

/////////////////////////////////////////////////////////
push();
translate(107, 0);
whiteLines();
pop();


push();
translate(220, 0);
lines();
pop();

for (let zz = 0; zz <= 25; zz++){
  push();
  translate(123, 20*zz);
  scale(1, - 1);
  tAngle();
  pop();
};


  //3lines
  push();
  translate(258, 0);
  lines();
  pop();
//////////////////////////////////////////////////////////////////////
  //rightborder
  for(let a = 0; a <= 25; a++){
  push();
  translate(335, 50*a);
  pasiLeaf();
  pop();
  };

  //Rightknotcolumn
  for(let aa = 0; aa <= 25; aa++){
    push();
    translate(309, 20*aa);
    notch();
    pop();
  };
  //Rightknotcolumn
  for(let b = 0; b <= 25; b++){
    push();
    translate(324, 20*b);
    bNotch();
    pop();
  };

for (let f = 0; f <= 40; f++){
push();
translate (-37, 60*f)
  stroke("white");
  line(193, 5, 207, 15);
  line(192, 15, 207, 5);
  line(193, 25, 207, 25);
  line(193, 21, 207, 21);
  line(195, 30, 195, 60);
  line(200, 30, 200, 60);
  line(205, 30, 205, 60);
pop();
}

for (let f = 0; f <= 40; f++){
push();
translate (37, 60*f)
  stroke("white");
  line(193, 5, 207, 15);
  line(192, 15, 207, 5);
  line(193, 25, 207, 25);
  line(193, 21, 207, 21);
  line(195, 30, 195, 60);
  line(200, 30, 200, 60);
  line(205, 30, 205, 60);
pop();
}

strokeWeight(3);
  line(150, 0, 150, 400);
  line(250, 0, 250, 400);
  push();
strokeWeight(1);
push();
translate(108, 0);
lines();
pop();
push();
translate(150, 0);
lines();
pop();

for (let u = 0; u <= 25; u++){
  push();
  translate(0, 60*u)
  stroke("white");
  fill("black")
   ellipse(200, 3, 5, 5);//circle at top
  ellipse(185, 25, 5, 5);
   ellipse(213, 25, 5, 5);
  beginShape();
  vertex(175, 0)
  vertex(225, 50)
  vertex(200, 40)
  vertex(175, 50);
  vertex(225, 0);
  vertex(200, 10)
  vertex(175, 0);
  endShape();
  strokeWeight(2);
  stroke("black");
  line(190, 50, 210, 50);
  line(190, 55, 210, 55);
  pop();
}

