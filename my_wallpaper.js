//your parameter variables go here!
// color variables need to be noted here (which line)
// color variables placed in my symbol not here.

var lineWidth = 1;
var lineColour = 155; // black, grey and white work, we only need one value
//x and y values for translate jitsu

//rotation nonsense i do not fully understand but we cool with it.
var rOt1 = 5;
var rOt2 = 10;

//yes we've set a variables for colours, all i could think of
var R = 7; // maybe we can change colour here? p5 only recognises one number hence why colours need to be called in mySymbol, don't know why 
var G = 247; // so if i tutu here then i can change colours?
var B = 11; // have to figure out how to change each pasiLeaf L or R seperately? that would be annoying no? if i just added var letter and a number? x 3 x however many colors i wana do
var S = 250;//TURNS OUT WE CAN
var Q = 147;

//list of colours and their var code to make it easier
// (250, 11, 7) red / (S, B, R)
// (7, 11, 250) blue / (R, B, S)
// (247, 7, 250) light purple / (G, R, S)
// (250, 250, 7) yellow / (S, S, R)
// (7, 247, 11) greenish / (R, G, B)
// (147, 7, 250) purple / (Q, R, S)
// (247, 147, 7) orange / (G, Q, R)

//tryna figure out columns and rows
var C1 = 25;
var C2 = 50;
var C3 = 75;
var C4 = 100;
var C5 = 125;
var C6 = 150;

//need a if statement.
//if stroke is this colour then fill is this?
//if background is this colour then rotate is this? don't even know what the helly rotate does, im thinking rotate but something tells me this is not it
//if broke stay broke.lol

//wallpaper ideas
//L = pasileafl, R = pasiLeafr.
//L, L, R, R, L, L, R, R.
//R, L, R, L, R, L, R, L.
//R, R, L, L, R, R, L, L.
//L, R, L, R, L, R, L, R.
//go horizontal/ rows
//L, R, L, R, L, R, L, R.
//R, L, R, L, R, L, R, L.
//individual sets
//L, R, L, R, L, R, L, R.//change every row/column.
//R, L, R, L, R, L, R, L.
//change colors?
//bGround.
//fills.
//stroke.

//pasi leaf pattern shape, use translate jitsu to call this.
//pasileaf L and R are made at 0, 0, so translating should be easier translate jitsu by 25 either way.
//changing columns is annoying,because translating is hoha.
//think we found our if my guy

function pasiLeafl (){
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
  background(R, S, B); //background colour 
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function


for (let a = 0; a <= 7; a++){
  push ();
  translate (25*a, 25*a);
  strokeWeight (lineWidth)
  stroke (R, G, B);
  fill (R, B, S);
  rotate (rOt1);
  pasiLeafl ();
  pop ();
}

for (let b = 0; b <= 7; b++){
  push ();
  translate (C1*b, C1);
  strokeWeight (lineWidth);
  stroke (S);
  fill (R, B, S)
  rotate (rOt2);
  pasiLeafr();
  pop();
}

for (let b = 0; b <= 7; b++){
  push ();
  translate (25*b, 25);
  strokeWeight (lineWidth);
  stroke (S);
  fill (B, S, Q)
  rotate (rOt2);
  pasiLeafr();
  pop();
}

for (let b = 0; b <= 7; b++){
  push ();
  translate (50*b, 0);
  strokeWeight (lineWidth);
  stroke (S);
  fill (R, G, B)
  rotate (rOt2);
  pasiLeafr();
  pop();
}

for (let c = 0; c <= 4; c++){
  push ();
  translate (0, 25*c);
  strokeWeight (lineWidth);
  stroke (S);
  fill (S, B, R);
  rotate (rOt1);
  pasiLeafl ();
  pop ();
}

}
