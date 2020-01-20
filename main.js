const width = 850;
const height = 550;
let shrimpCount = 0;
let sharkCount = 3;

const game = new Game();

function preload() {
  console.log("preload");
  game.init();
}

function setup() {
  createCanvas(width, height);
  game.setup();
}

function draw() {
  game.draw();
  if (keyIsDown(40)) {
    if (game.player.y < height - game.player.image.height) {
      game.player.y += 3;
    }
  }
  if (keyIsDown(38)) {
    if (game.player.y > 0) {
      game.player.y -= 3;
    }
  }
  if (keyIsDown(39)) {
    if (game.player.x < width - game.player.image.width) {
      game.player.x += 3;
    }
  }
  if (keyIsDown(37)) {
    if (game.player.x > 0) {
      game.player.x -= 3;
    }
  }
}
