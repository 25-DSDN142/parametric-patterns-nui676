//your parameter variables go here!
//background colour
var bGround = (240, 16, 12);//that was meant to be red, why not red?
//stroke weight variables.
var sW1 = (1);
var sW2 = (1);
var sW3 = (2);
var sW4 = (3);
//stroke colour variables
var sC1 = (0, 0, 0);
var sC2 = (1);
var sC3 = (2); 
var sC4 = (3);
//fill colour.
var fil1 = (255, 255, 255);
var fil2 = (255, 255, 255);
var fil3 = (255, 255, 255);
var fil4 = (255, 255, 255);
//rotatiton variables.
var rOt1 = (0);
var rOt2 = (0);
var rOt3 = (0);
var rOt4 = (0);

//list of colours to make it easier.
//

//need a if statment.

//test these column sets
//L = pasileafl, R = pasiLeafr.
//L, L, R, R, L, L, R, R.
//R, L, R, L, R, L, R, L.
//R, R, L, L, R, R, L, L.
//L, R, L, R, L, R, L, R.

//pasi leaf pattern shape, use translate jitsu to call this.
//figured out leaving out stroke,weight and fill i could imput variables seperatly to each column, wow!
//got to remember i drew each leaf at different spots, calling them gets funky
//pasiLeafl is allways going to be called from 0, 0, 1st column
//pasiLeafr is called from 25, 0. 2nd column

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

//columns start from left.
//column 1.
for (let h = 0; h<=7; h++){
push();
translate(-25, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
rotate (rOt1);//don't know why this works but we're running with it.
pasiLeafr()
pop();
};

//column 2.
for (let h = 0; h<=7; h++){
push();
translate (25, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
rotate (rOt2);
pasiLeafl();
pop();
};

//column 3
for (let h = 0; h<=7; h++){
push();
translate( 25, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafr();
pop();
};

//column 4
for (let h = 0; h<=7; h++){
push();
translate( 75, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafl();
pop();
};

//column 5
for (let h = 0; h<=7; h++){
push();
translate (75, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafr();
pop();
};

//column 6
for (let h = 0; h<=7; h++){
push();
translate( 100, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafr();
pop();
};

//column 7
for (let h = 0; h<=7; h++){
push();
translate( 150, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafl();
pop();
};

//column 8
for (let h = 0; h<=7; h++){
push();
translate (175, 25*h);
strokeWeight (sW2);
stroke (sC1);
fill (fil1);
pasiLeafl();
pop();
};
}