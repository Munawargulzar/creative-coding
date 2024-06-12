let board = [
  
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];
let currentPlayer = 'X';

function setup() {
  createCanvas(250, 250);
  drawBoard();
}
  
function draw() {
}

function drawBoard() {
  background(255);
  let w = width / 3;
  let h = height / 3;
  strokeWeight(4);
  for (let i = 0; i < 3; i++) {
    line(i * w, 0, i * w, height);
    line(0, i * h, width, i * h);
  }

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = i * w + w / 2;
      let y = j * h + h / 2;
      let spot = board[i][j];
      textSize(32);
      let r = w / 4;
      if (spot == 'X') {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      } else if (spot == 'O') {
        noFill();
        ellipse(x, y, w / 2);
      }
    }
  }
}

function mousePressed() {
  let i = floor(mouseX / (width / 3));
  let j = floor(mouseY / (height / 3));
  if (board[i][j] == '') {
    board[i][j] = currentPlayer;
    if (checkWinner(currentPlayer, i, j)) {
      console.log(currentPlayer + ' wins!');
      noLoop();
    } else if (checkDraw()) {
      console.log('Draw!');
      noLoop();
    } else {
      currentPlayer = currentPlayer == 'X' ? 'O' : 'X';
    }
  }
  drawBoard();
}

function checkWinner(player, x, y) {
  for (let i = 0; i < 3; i++) {
    if (board[i][y] != player) {
      break;
    }
    if (i == 2) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (board[x][i] != player) {
      break;
    }
    if (i == 2) {
      return true;
    }
  }
  if (x == y) {
    for (let i = 0; i < 3; i++) {
      if (board[i][i] != player) {
        break;
      }
      if (i == 2) {
        return true;
      }
    }
  }
  if (x + y == 2) {
    for (let i = 0; i < 3; i++) {
      if (board[i][2 - i] != player) {
        break;
      }
      if (i == 2) {
        return true;
      }
    }
  }
  return false;
}

function checkDraw() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        return false;
      }
    }
  }
  return true;
}
