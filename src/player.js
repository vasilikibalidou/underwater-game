class Player {
  constructor() {
    this.image = loadImage("assets/fishRight.png");
  }
  setup() {
    this.image.height = 80;
    this.image.width = 80;
    this.x = this.image.width;
    this.y = height / 2;
  }
  draw() {
    image(this.image, this.x, this.y, this.image.width, this.image.height);
  }
}
