//your parameter variables go here!
var bGround = ("red");
var sWeight = (1);
var strokeCol = (0, 0, 0);


function pasiLeafr(){
strokeWeight (sWeight);
stroke (strokeCol)
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
strokeWeight (sWeight);
stroke (strokeCol);
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
  
for (let h = 0; h<=7; h++){
push();
translate(-25, 25*h);
pasiLeafr();
pop();
};

for (let h = 0; h<=7; h++){
push();
translate( 50, 25*h)
pasiLeafl();
pop();
};


for (let h = 0; h<=7; h++){
push();
translate (0, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
pop()}


for (let h = 0; h<=7; h++){
push()
translate( 75, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
endShape(CLOSE)
pop()}

for (let h = 0; h<=7; h++){
push();
translate (75, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
pop()}

for (let h = 0; h<=7; h++){
push()
translate( 125, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
endShape(CLOSE)
pop()}

for (let h = 0; h<=7; h++){
push()
translate( 150, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
endShape(CLOSE)
pop()}

for (let h = 0; h<=7; h++){
push();
translate (150, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
pop()}

push()
strokeWeight(1);
stroke (252, 12, 8)//red
line (23, 0, 23, 5);
line (27, 0, 27, 5);

pop();



}