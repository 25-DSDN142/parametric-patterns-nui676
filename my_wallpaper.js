//your parameter variables go here!
// color variables need to be noted here (which line)
// color variables placed in my symbol not here.

var lineWidth = 1;
var rOt1 = 5;
var R = 247; // maybe we can change colour here? p5 only recognises one number hence why colours need to be called in mySymbol, don't know why 
var G = 147; // so if i tutu here then i can change colours?
var B = 6; // have to figure out how to change each pasiLeaf L or R seperately? that would be annoying no? if i just added var letter and a number? x 3 x however many colors i wana do
var lineColour = 155; // black, grey and white work, we only need one value
var C1 = 25;
var C2 = 50;
var C3 = 75;
var C4 = 100;
var C5 = 125;
var C6 = 150;
//list of colours to make it easier
// (247, 11, 7) red
// (7, 11, 247) blue
// (247, 7, 215) pink
// (231, 247, 7) yellow
// (7, 247, 11) green
// (155, 7, 247) purple
// (247, 147, 6) orange

//need a if statement.
//if stroke is this colour then fill is this?
//if background is this colour then rotate is this? don't even know what the helly rotate does, im thinking rotate but something tells me this is not it

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
  background(R, G, B); //background colour 
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function


for (let a = 0; a <= 7; a++){
push ();
translate (C2, C1*a);//column
strokeWeight (lineWidth)
stroke (lineColour);
fill (R, G, B);
rotate (rOt1);
pasiLeafl ();
pop ();
}

}
