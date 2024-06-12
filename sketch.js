function setup() {
  createCanvas(400, 400);
  background(220);
  
  for (let i = 0; i < 100; i++) {
    let shape = random(3);
    
    let x = random(width);
    let y = random(height);
    
    let s = random(10, 50);
    
    let r = random(255);
    let g = random(255);
    let b = random(255);
    
    fill(r, g, b);
    noStroke();
    if (shape < 1) {
      ellipse(x, y, s, s);
    } else if (shape < 2) {
      rect(x, y, s, s);
    } else {
      let x2 = x + random(-s, s);
      let y2 = y + random(-s, s);
      let x3 = x + random(-s, s);
      let y3 = y + random(-s, s);
      triangle(x, y, x2, y2, x3, y3);
    }
  }
}
