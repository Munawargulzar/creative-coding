let data = [];

function setup() {
  createCanvas(800, 400);
  generateData();
}

function generateData() {
  data = [];
  for (let i = 0; i < 100; i++) {
    data.push({
      x: random(width),
      y: random(height),
      size: random(10, 30),
      color: color(random(255), random(255), random(255), 150)
    });
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < data.length; i++) {
    let p = data[i];
    fill(p.color);
    rect(p.x, p.y, p.size, height - p.y);
  }
}

function mousePressed() {
  generateData();
}
