class Lobster {
  constructor() {
    this.width = 50;
    this.height = 50;
    this.x = width;
    this.y = random(0, height - this.height);
  }

  draw() {
    this.x -= 3;
    image(game.lobsterImg, this.x, this.y, this.width, this.height);
  }
  collides(obj) {
    if (this.x + this.width < obj.x || obj.x + 100 < this.x) {
      return false;
    }
    if (this.y + this.height < obj.y || obj.y + 50 < this.y) {
      return false;
    }
    return true;
  }
}
