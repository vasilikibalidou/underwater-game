class Hook {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = random(0, width - this.width);
    this.y = 0;
  }

  draw() {
    if (score >= 50) {
      this.y += 2;
    }
    this.y += 1;
    image(game.hookImg, this.x, this.y, this.width, this.height);
  }
  collides(obj) {
    if (this.x + this.width < obj.x || obj.x + 80 < this.x) {
      return false;
    }
    if (this.y + this.height < obj.y || obj.y + 50 < this.y) {
      return false;
    }
    return true;
  }
}
