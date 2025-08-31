//originl settings below.
////translate variables
//var T = 25 // y variable in translate
//var GG = 7 // how many copys are translated
//var imgScale = 1

//lets can be found lines 94 - 99
//scale (imgScale)
//let Fill1 = color (0);
//let Fill2 = color (0);
//let pAttern1 = (pasiLeafl);
//let pAttern2 = (pasiLeafl);
//let St = color (S, S, R)



//translate variables
var T = 25 // y variable in translate
var GG = 7 // how many copys are translated
var imgScale = 2

//strokeWeight variables
var Weight1 = 2;

//columns
//x variable in translate
var c1 = 0;
var c2 = 25;
var c3 = 50
var c4 = 75;
var c5 = 100;
var c6 = 125;
var c7 = 150;
var c8 = 175;

// COLOURS
var R = 5;
var G = 247;
var B = 11;
var S = 250;
var Q = 147;

//can i do something with the columns? if bGround is a certain colour change all pAttern2 in any odd column to pAttern1?

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
 pWallpaper.output_mode(GRID_WALLPAPER);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(255); //background colour 
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function

scale (imgScale)
let Fill1 = color (S, B, R);
let Fill2 = color (S, B, R);
let pAttern1 = (pasiLeafr);
let pAttern2 = (pasiLeafr);
let St = color (0)


//list of colours and their var code to make it easier
// (250, 11, 7) / (S, B, R) / RED
// (7, 11, 250) / (R, B, S) / BLUE
// (247, 7, 250) / (G, R, S) / PURPLE LITE
// (250, 250, 7) / (S, S, R) / YELLOW
// (7, 247, 11) / (R, G, B) / GREENISH
// (147, 7, 250) / (Q, R, S) / PURPLE
// (247, 147, 7) / (G, Q, R) / ORANGE


for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill1)
  translate (c1, T *a);
  pAttern1();
  pop ();
}


for (let b = 0; b <= GG; b++){
  push();
  strokeWeight (Weight1);
  stroke (St)
  fill (Fill2);
  translate (c2, T *b);
  pAttern2 ();
  pop ();
}


for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill1);
  translate (c3, T *a);
  pAttern1 ();
  pop ();

}

for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill2);
  translate (c4, T *a);
  pAttern2 ();
  pop ();

}

for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill1);
  translate (c5, T *a);
  pAttern1 ();
  pop ();

}

for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill2);
  translate (c6, T *a);
  pAttern2 ();
  pop ();

}


for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill1);
  translate (c7, T *a);
  pAttern1 ();
  pop ();

}


for (let a = 0; a <= GG; a++){
  push ();
  strokeWeight (Weight1);
  stroke (St);
  fill (Fill2);
  translate (c8, T *a);
  pAttern2 ();
  pop ();

}




}