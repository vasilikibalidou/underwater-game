class Game {
  constructor() {
    console.log("game");
    this.shrimps = [];
    this.lobsters = [];
    this.sharks = [];
    this.hooks = [];
    this.life = 3;
    this.score = 0;
    this.level = 1;
    this.highScore = 0;
    this.start = false;
  }
  init() {
    console.log("init");
    this.background = new Background();
    this.player = new Player();
    this.shrimpImg = loadImage("assets/shrimp.png");
    this.lobsterImg = loadImage("assets/lobster.png");
    this.sharkImg = loadImage("assets/shark.png");
    this.hookImg = loadImage("assets/hook.png");
    this.gameSound = loadSound("assets/game.mp3");
    this.gameOverSound = loadSound("assets/game-over.wav");
    this.pointSound = loadSound("assets/point.wav");
    this.collisionSound = loadSound("assets/bump.wav");
  }
  draw() {
    this.background.draw();
    this.player.draw();
    if (frameCount % 60 === 0) {
      this.shrimps.push(new Shrimp());
    }
    this.shrimps.forEach(shrimp => {
      if (shrimp.collides(this.player)) {
        this.score++;
        this.pointSound.play();
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
    if (frameCount % 300 === 0) {
      this.lobsters.push(new Lobster());
    }
    this.lobsters.forEach(lobster => {
      if (lobster.collides(this.player)) {
        this.score += 5;
        this.pointSound.play();
      }
    });
    this.lobsters = this.lobsters.filter(
      function(lobster) {
        if (
          !lobster.collides(this.player) &&
          lobster.y + lobster.height <= height
        ) {
          return true;
        }
      }.bind(this)
    );
    if (this.score >= 20) {
      this.level = 2;
      if (frameCount % 180 === 0) {
        this.sharks.push(new Shark());
      }
    }
    if (frameCount % 240 === 0) {
      this.sharks.push(new Shark());
    }
    this.sharks.forEach(shark => {
      if (shark.collides(this.player)) {
        this.life--;
        this.collisionSound.play();
      }
    });
    this.sharks = this.sharks.filter(
      function(shark) {
        if (!shark.collides(this.player) && shark.y + shark.height <= height) {
          return true;
        }
      }.bind(this)
    );
    if (this.score >= 40) {
      this.level = 3;
      if (frameCount % 180 === 0) {
        this.hooks.push(new Hook());
      }
    }
    if (frameCount % 240 === 0) {
      this.hooks.push(new Hook());
    }
    this.hooks.forEach(hook => {
      if (hook.collides(this.player)) {
        this.life--;
        this.collisionSound.play();
      }
    });
    this.hooks = this.hooks.filter(
      function(hook) {
        if (!hook.collides(this.player) && hook.y + hook.height <= height) {
          return true;
        }
      }.bind(this)
    );
    if (this.life === 0) {
      this.start = false;
      if (this.score > parseInt(localStorage.getItem("highScore"))) {
        this.highScore = this.score;
        let highScore = this.score;
        localStorage.setItem("highScore", highScore);
      }
      this.gameSound.stop();
      this.gameOverSound.play();
      document.getElementById("game-screen").classList.add("hidden");
      document.getElementById("end-screen").classList.remove("hidden");
      document.getElementById("end-score").innerHTML = this.score;
      document.getElementById("end-highScore").innerHTML = localStorage.getItem(
        "highScore"
      );
    }
    document.getElementById("score").innerHTML = this.score;
    document.getElementById("level").innerHTML = this.level;
    document.getElementById("life").innerHTML = this.life;
    document.getElementById("highScore").innerHTML = localStorage.getItem(
      "highScore"
    );
    this.shrimps.forEach(function(shrimp) {
      shrimp.draw();
    });
    this.lobsters.forEach(function(lobster) {
      lobster.draw();
    });
    this.sharks.forEach(function(shark) {
      shark.draw();
    });
    this.hooks.forEach(function(hook) {
      hook.draw();
    });
  }
  setup() {
    this.player.setup();
  }
}
