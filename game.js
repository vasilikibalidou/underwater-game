class Game {
  constructor() {
    console.log("game");
    this.shrimps = [];
    this.sharks = [];
  }
  init() {
    this.background = new Background();
    this.player = new Player();
    this.shrimpImg = loadImage("assets/shrimp.png");
    this.sharkImg = loadImage("assets/shark.png");
  }
  draw() {
    this.background.draw();
    this.player.draw();
    if (frameCount % 60 === 0) {
      this.shrimps.push(new Shrimp());
    }
    this.shrimps.forEach(shrimp => {
      if (shrimp.collides(this.player)) {
        shrimpCount++;
        document.getElementById("score").innerHTML = shrimpCount;
      }
    });
    this.shrimps = this.shrimps.filter(
      function(shrimp) {
        if (
          !shrimp.collides(this.player) &&
          shrimp.y + shrimp.height <= height
        ) {
          return true;
        }
      }.bind(this)
    );
    if (frameCount % 240 === 0) {
      this.sharks.push(new Shark());
    }
    this.sharks.forEach(shark => {
      if (shark.collides(this.player)) {
        sharkCount--;
        document.getElementById("life").innerHTML = sharkCount;
      }
    });
    this.sharks = this.sharks.filter(
      function(shark) {
        if (!shark.collides(this.player) && shark.y + shark.height <= height) {
          return true;
        }
      }.bind(this)
    );
    this.shrimps.forEach(function(shrimp) {
      shrimp.draw();
    });
    this.sharks.forEach(function(shark) {
      shark.draw();
    });
  }
  setup() {
    this.player.setup();
  }
}
