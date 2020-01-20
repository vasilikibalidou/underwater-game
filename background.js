class Background {
  constructor() {
    this.image = loadImage("assets/background.png");
  }
  draw() {
    background(this.image);
    stroke("#595959");
    strokeWeight(3);
    line(0, 0, width, 0);
    line(width, 0, width, height);
    line(width, height, 0, height);
    line(0, height, 0, 0);
  }
}
