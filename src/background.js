class Background {
  constructor() {
    this.images = [
      {
        src: loadImage("assets/background.png"),
        x: 0
      },
      {
        src: loadImage("assets/background.png"),
        x: 0
      }
    ];
  }

  move(img) {
    image(img.src, img.x, 0, width, height);
    image(img.src, img.x + width, 0, width, height);
    img.x -= 0.5;
    if (img.x <= -width) {
      img.x = 0;
    }
  }

  draw() {
    for (let i = 0; i < this.images.length; i++) {
      this.move(this.images[i]);
    }
    stroke("#595959");
    strokeWeight(3);
    line(0, 0, width, 0);
    line(width, 0, width, height);
    line(width, height, 0, height);
    line(0, height, 0, 0);
  }
}
