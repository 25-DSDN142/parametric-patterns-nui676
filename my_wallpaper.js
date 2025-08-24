//your parameter variables go here!
//list of colours to make it easier.
// (0, 0, 0) white
// (255, 255, 255) black
// (247, 11, 7) red
// (7, 11, 247) blue
// (247, 7, 215) pink
// (231, 247, 7) yellow
// (7, 247, 11) green
// (155, 7, 247) purple
// (230, 225, 213) light grey
// (247, 147, 6) orange

//need a if statment.

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
//pasileaf L and R are made at 0, 0, so translating should be easier.
//changing columns is annoying,because translating is hoha.
//need to find a way to change a column without affectting translation jitsu.
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

  background(247, 147, 6); //background colour

}
function my_symbol() {// do not rename this function. Treat this similarly to a Draw function

for (let a = 0; a <= 7; a++){
push ();
translate (10, 25*a);
pasiLeafr ();
pop ();
}

}
