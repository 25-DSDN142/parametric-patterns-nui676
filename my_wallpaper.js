//your parameter variables go here!

//background colour
let bGround = color = (247, 11, 7);//that was meant to be red, why not red?
//stroke weight variables.
let sW1 = (1);
let sW2 = (2);
let sW3 = (2);
let sW4 = (3);
//stroke colour variables
let sC1 = color = (0, 0, 0);//black
let sC2 = color = (247, 11, 7);//red
let sC3 = color = (2); 
let sC4 = color = (3);
//fill colour.
let fil1 = color = (255, 255, 255);//white
let fil2 = color = (255, 255, 255);
let fil3 = color = (255, 255, 255);
let fil4 = color =(255, 255, 255);
//rotatiton variables.
let rOt1 = (5);//i dont quite know what this does but im going with it
let rOt2 = (25);
let rOt3 = (5);
let rOt4 = (0);

//list of colours to make it easier.
// (0, 0, 0) white
// (255, 255, 255) black
// (247, 11, 7) red

//need a if statment.

//test these column sets
//L = pasileafl, R = pasiLeafr.
//L, L, R, R, L, L, R, R.
//R, L, R, L, R, L, R, L.
//R, R, L, L, R, R, L, L.
//L, R, L, R, L, R, L, R.

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
  background(bGround); //background colour
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function

  //column1
  for (let a = 0; a <= 7; a++){
  push();
  translate (25*a, 0);
  strokeWeight (sW1);
  stroke (sC1);
  fill (fil1);
  rotate (rOt1)
  pasiLeafl();
  pop();}

}