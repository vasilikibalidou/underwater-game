const width = 850;
const height = 550;
const start = document.getElementById("start");
const again = document.getElementById("again");

const game = new Game();

document.getElementById("life").innerHTML = game.life;
document.getElementById("score").innerHTML = game.score;
document.getElementById("highScore").innerHTML = game.highScore;
document.getElementById("level").innerHTML = 1;

start.onclick = function() {
  game.start = true;
  document.getElementById("start-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
};

again.onclick = function() {
  game.start = true;
  game.shrimps = [];
  game.lobsters = [];
  game.sharks = [];
  game.hooks = [];
  game.player.x = game.player.image.width;
  game.player.y = height / 2;
  game.life = 3;
  game.score = 0;
  document.getElementById("score").innerHTML = game.score;
  document.getElementById("highScore").innerHTML = game.highScore;
  document.getElementById("life").innerHTML = game.life;
  document.getElementById("level").innerHTML = 1;
  document.getElementById("end-screen").classList.add("hidden");
  document.getElementById("game-screen").classList.remove("hidden");
};

function preload() {
  console.log("preload");
  game.init();
}

function setup() {
  const myCanvas = createCanvas(width, height);
  myCanvas.parent("#game-screen");
  game.setup();
}

function draw() {
  if (!game.start) {
    document.getElementById("game-screen").classList.add("hidden");
    return;
  }
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
