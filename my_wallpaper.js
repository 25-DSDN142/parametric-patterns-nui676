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
  vertex (146, 25);
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
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  //grid lines
  strokeWeight(1);
  stroke(204, 39, 2450)//light purple lines
  line (0, 0, 200, 200);
  line (0, 200, 200, 0);
  line (0, 100, 200, 100);
  line (100, 0, 100, 200);
  line (50, 0, 50, 200);
  line (0, 50, 200, 50);
  line (150, 0, 150, 200);
  line (0, 150, 200, 150);

  //create all patterns in 0,50 square, easier to recall
  //no recalling, build and translate//cleaner

  //red pasi leaf on the left side
  for (let a = 0; a <= 3; a ++){
  push();//it worked :)
  strokeWeight (1);
  stroke (0, 0, 0)//black
  fill (247, 2, 6)// red
  translate (0, 50*a);
//tranlate is what i need to figure out
//why is dividing the y working?
//did the scale apply to every single repeated picture giving it that trippy look??
  beginShape();
  vertex (25, 0);
  vertex (25, 50);
  vertex (50, 50);
  vertex (25, 25);
  vertex (50, 25);
  vertex (50, 0);
  vertex (0, 50);
  vertex (0, 25);
  vertex (25, 25);
  vertex (0, 0);
  vertex (25, 0);
  endShape(CLOSE);//always close otherwise broken
  pop();}


//notch facing right
for (let b = 0; b <= 7; b ++){
push();
translate(0, 25*b);
nOtch();
pop();
}

for ( let c = 0; c <= 7; c++){
push();
translate(-50, 25*c);
//lets try changing the color of notches from here
nOtch();
pop();
}

for (let d = 0; d <= 3; d++){
push();
strokeWeight (1);
stroke (0, 0, 0);
fill (247, 2, 6);
translate (0, 50*d);
beginShape ();
vertex (150, 0);
vertex (200, 50);
vertex (200, 25);
vertex (175, 25);
vertex (175, 50);
vertex (150, 50);
vertex (200, 0);
vertex (175, 0);
vertex (175, 25);
vertex (150, 25);
endShape(CLOSE);
pop();

for ( let e = 0; e <= 7; e++){
push();
translate(0, 25*e);
bNotch();
pop();
}

}