//your parameter variables go here!

 function nOtch (){
  strokeWeight(1);
    stroke (0, 0 , 0);
    fill (247, 2, 6);
    beginShape ();
    vertex (50, 0);
    vertex (54, 5);
    vertex (54, 20);
    vertex (50, 25);
    endShape(CLOSE);
 }

function bNotch (){
  strokeWeight(1);
  stroke (0, 0 , 0);
  fill (247, 2, 6);
  beginShape();
  vertex (150, 0);
  vertex (146, 5);
  vertex (146, 20);
  vertex (150, 25);
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
  background(231, 242, 12); //yellow? more mimi than yellow, ew
}

function my_symbol() {// do not rename this function. Treat this similarly to a Draw function

  //grid lines
  strokeWeight(1);
  stroke(204, 39, 245)//light purple lines
  line (0, 0, 200, 200);
  line (0, 200, 200, 0);
  line (0, 100, 200, 100);
  line (100, 0, 100, 200);
  line (50, 0, 50, 200);
  line (0, 50, 200, 50);
  line (150, 0, 150, 200);
  line (0, 150, 200, 150);

for (let h = 0; h<=7; h++){
push()
translate( 0, 25*h)
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
translate( 50, 25*h)
strokeWeight(1);
stroke(255, 255, 255);
fill (0, 0, 0);
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
endShape(CLOSE)
pop()}


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



}