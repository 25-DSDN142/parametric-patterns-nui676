//your parameter variables go here!
// color variables need to be noted here (which line)
// color variables placed in my symbol not here.


//let leafFill1 = color (B, S, R);
//let leafFill2 = color (S, R, B);
//let pAttern1 = pasiLeafl
//let pAttern2 = pasiLeafr
var Weight1 = 1;
var lineColour = 255;
var lineColour1 = 155;

//columns
var c1 = 0;
var c2 = 50;
var c3 = 75;
var c4 = 100;
var c5 = 125;
var c6 = 150;
var c7 = 175;

// COLOURS
var R = 7;
var G = 247;
var B = 11;
var S = 250;
var Q = 147;

//list of colours and their var code to make it easier
// (250, 11, 7) / (S, B, R) / RED
// (7, 11, 250) / (R, B, S) / BLUE
// (247, 7, 250) / (G, R, S) / PURPLE LITE
// (250, 250, 7) / (S, S, R) / YELLOW
// (7, 247, 11) / (R, G, B) / GREENISH
// (147, 7, 250) / (Q, R, S) / PURPLE
// (247, 147, 7) / (G, Q, R) / ORANGE


function pasiLeafl(){
beginShape();
vertex (0, 0);
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

function pasiLeafr(){
beginShape();
vertex (0, 0);
vertex (25, 25);
vertex (25, 12.5);
vertex (12.5, 12.5);
vertex (12.5, 0);
vertex (25, 0);
vertex (0, 25)
vertex (12.5, 25);
vertex (12.5, 12.5);
vertex (0, 12.5);
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
  background(R); //background colour 
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function
  
//can we translate multiple shapes in the same jitsu?
//no you can't, weird thing start happening
let leafFill1 = color (B, S, R)
let leafFill2 = color (S, R, B)
let pAttern1 = (pasiLeafl)
let pAttern2 = (pasiLeafr)


for (let a = 0; a <= 7; a ++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill1);
  translate (c1, 25*a);
  pAttern1();
  pop();
}

for (let b = 0; b <= 7; b++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill2);
  translate( 25, 25*b);
  pAttern2();
  pop();
}

for (let c = 0; c <= 7; c++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill1);
  translate( c2, 25*c);
  pasiLeafl ();
  pop();
}

for (let d = 0; d <= 7; d++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill2);
  translate( c3, 25*d);
  pasiLeafr ();
  pop();
}

for (let e = 0; e <= 7; e++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill1);
  translate( c4,25*e);
  pasiLeafl ();
  pop();
}

for (let f = 0; f <= 7; f++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill2);
  translate( c5, 25*f);
  pasiLeafr ();
  pop();
}

for (let g = 0; g <= 7; g++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill1);
  translate( c6, 25*g);
  pasiLeafl ();
  pop();
}

for (let h = 0; h <= 7; h++){

  push();
  strokeWeight (Weight1);
  stroke (lineColour);
  fill (leafFill2);
  translate( c7, 25*h);
  pasiLeafr ();
  pop();
}

}

