//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;


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
  stroke(204, 39, 2450)//light purple
  line (0, 0, 200, 200);
  line (0, 200, 200, 0);
  line (0, 100, 200, 100);
  line (100, 0, 100, 200);
  line (50, 0, 50, 200);
  line (0, 50, 200, 50);
  line (150, 0, 150, 200);
  line (0, 150, 200, 150);

  //create all patterns in 0,50 square, easier to recall
  //pasi leaf

  push();
  for (let d = 0; d <=50; d ++){//it worked :)
  strokeWeight (1);
  stroke (0, 0, 0)//black
  fill (247, 2, 6)// red
  translate (0, 15*d);
  beginShape();
  scale(0.9);
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
  endShape(CLOSE);}
  pop();
}