class Shark {
  constructor() {
    this.width = 80;
    this.height = 80;
    this.x = width;
    this.y = random(0, height - this.height);
  }

  draw() {
    this.x -= 1;
    image(game.sharkImg, this.x, this.y, this.width, this.height);
  }
  collides(obj) {
    if (this.x + this.width - 30 < obj.x || obj.x + 100 < this.x) {
      return false;
    }
    if (this.y + this.height - 30 < obj.y || obj.y + 50 < this.y) {
      return false;
    }
    return true;
  }
}
