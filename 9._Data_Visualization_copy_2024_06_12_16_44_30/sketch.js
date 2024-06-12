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
      diameter: random(10, 30),
      color: [random(255), random(255), random(255)]
    });
  }
}

function draw() {
  background(220);
  
  for (let i = 0; i < data.length; i++) {
    let p = data[i];
    fill(p.color[0], p.color[1], p.color[2]);
    ellipse(p.x, p.y, p.diameter, p.diameter);
  }
}

function mousePressed() {
  generateData();
}
