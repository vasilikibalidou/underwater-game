class Game {
  constructor() {
    console.log("game");
    this.shrimps = [];
    this.lobsters = [];
    this.sharks = [];
    this.hooks = [];
    this.life = 3;
    this.score = 0;
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
        document.getElementById("score").innerHTML = this.score;
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
        document.getElementById("score").innerHTML = this.score;
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
      document.getElementById("level").innerHTML = 2;
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
        document.getElementById("life").innerHTML = this.life;
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
      document.getElementById("level").innerHTML = 3;
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
        document.getElementById("life").innerHTML = this.life;
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
      console.log("game over");
      this.start = false;
      if (this.score > this.highScore) {
        this.highScore = this.score;
      }
      document.getElementById("game-screen").classList.add("hidden");
      document.getElementById("end-screen").classList.remove("hidden");
      document.getElementById("end-score").innerHTML = this.score;
      document.getElementById("end-highScore").innerHTML = this.highScore;
    }
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
