//your parameter variables go here!
var bGround = (252, 12, 8); //background colour
var sW1 = (1); //strokeweight 1
var sW2 = (1);
var sC1 = (0, 0, 0); //stroke1
var sC2 = (1);
var fill1 = (255, 255, 255);
var fill2 = (255, 255, 255);
var rOt1 = (2); //rotatitons1
var rOt2 = (5); //rotations2


function pasiLeafr(){
beginShape();
vertex (25, 0);
vertex (50, 25);
vertex (50, 12.5);
vertex (37.5, 12.5);
vertex (50, 0);
vertex (37.5, 0);
vertex (37.5, 25)
vertex (25, 25);
vertex (37.5, 12.5);
vertex (25, 12.5);
endShape(CLOSE);}

function pasiLeafl (){
beginShape();
vertex (0, 0);// the brain had to work overtime for this
vertex (25, 25);
vertex (12.5, 25);
vertex (12.5, 12.5);
vertex (25, 12.5);
vertex (25, 0);
vertex (0, 25);
vertex (0, 12.5);
vertex (12.5, 12.5);
vertex (12.5, 0);
endShape(CLOSE);
}

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
  background(bGround); //yellow? more mimi than yellow, ew
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function


//columns start from left.


//first column/pasiLeafr
for (let h = 0; h<=7; h++){
push();
translate(-25, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fill1);
rotate (rOt1);//don't know why this works but we're running with it
pasiLeafl()
pop();
};

//coulmn two//pasileafr
for (let h = 0; h<=7; h++){
push();
translate (25, 25*h);
rotate (rOt2);
pasiLeafl();
pop();
};

//third column pasiLeafl
for (let h = 0; h<=7; h++){
push();
translate( 50, 25*h)
pasiLeafl();
pop();
};

//fourth column/pasiLeafl
for (let h = 0; h<=7; h++){
push();
translate( 75, 25*h);
pasiLeafl();
pop();
};

//fifth column/pasiLefr
for (let h = 0; h<=7; h++){
push();
translate (75, 25*h)
pasiLeafr();
pop();
};

//sixthcolumn/pasiLeafr
for (let h = 0; h<=7; h++){
push()
translate( 100, 25*h)
pasiLeafr();
pop();
};

//seventh column/pasiLeafl
for (let h = 0; h<=7; h++){
push()
translate( 150, 25*h)
pasiLeafl();
pop();
};

//eigth column/pasiLeafl
for (let h = 0; h<=7; h++){
push();
translate (175, 25*h)
pasiLeafl();
pop();
};
}