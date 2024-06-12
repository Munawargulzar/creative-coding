let splash = [];
let fontSize = 40;

function setup() {
  createCanvas(800, 400);
  textAlign(CENTER, CENTER);
  textSize(fontSize);
  for (let i = 0; i < 100; i++) {
    let x = random(width);
    let y = random(height);
    if (y > height / 2 - fontSize / 2 && y < height / 2 + fontSize / 2) {
      y += random(-50, 50);
    }
    splash.push(new Splash(x, y));
  }
}

function draw() {
  background(0, 50, 150); 
  // Draw water splash
  for (let s of splash) {
    s.move();
    s.display();
    s.checkEdge();
  }
  
  fill(255);
  text('Bath Spa University', width / 2, height / 2);
}

class Splash {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.xSpeed = random(-5, 5);
    this.ySpeed = random(-10, -5);
    this.size = random(10, 30);
    this.color = color(255, 255, 255, 150);
  }

  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  checkEdge() {
    if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
      this.x = random(width);
      this.y = random(height / 2, height);
    }
  }

  display() {
    fill(this.color);
    ellipse(this.x, this.y, this.size, this.size);
  }
}
