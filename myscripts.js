var world = [
  [1,1,1,1,1],
  [1,0,2,3,1],
  [1,3,1,2,1],
  [1,2,2,2,1],
  [1,2,2,2,1],
  [1,3,1,2,1],
  [1,2,2,2,1],
  [1,3,2,2,1],
  [1,2,1,3,1],
  [1,2,3,2,1],
  [1,1,1,1,1],
];
var worldDict = {
  0: 'blank',
  1: 'wall',
  2: 'sushi',
  3: 'onigiri'
}

var score = 0;

function drawWorld(){
  output = "";

  for(var row = 0; row < world.length; row++){
    output += "<div class = 'row'>"
    for(var x = 0; x < world[row].length; x++){
      output += "<div class = '" + worldDict[world[row][x]] + "'></div>"
    }
    output += "</div>"
  }

  document.getElementById('world').innerHTML = output;
}

drawWorld();

var ninjaman = {
  x: 1,
  y: 1
}

function drawNinjaman(){
  document.getElementById('ninjaman').style.top = ninjaman.y * 40 + 'px';
  document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px';
}
drawNinjaman();

document.onkeydown = function(e){
  if (e.keyCode == 37){ // LEFT
    if(world[ninjaman.y][ninjaman.x - 1] != 1){
      ninjaman.x--;
      if (world[ninjaman.y][ninjaman.x] == 2) {
        score += 1;
      }
      if (world[ninjaman.y][ninjaman.x] == 3) {
        score += 5;
      } 
    }
  }
  if (e.keyCode == 39){ // RIGHT
    if(world[ninjaman.y][ninjaman.x + 1] != 1){
      ninjaman.x++;
      if (world[ninjaman.y][ninjaman.x] == 2) {
        score += 1;
      }
      if (world[ninjaman.y][ninjaman.x] == 3) {
        score += 5;
      } 
    }
  }
  if (e.keyCode == 38){ // UP
    if(world[ninjaman.y - 1][ninjaman.x] != 1){
      ninjaman.y--;
      if (world[ninjaman.y][ninjaman.x] == 2) {
        score += 1;
      }
      if (world[ninjaman.y][ninjaman.x] == 3) {
        score += 5;
      } 
    }
  }
  if (e.keyCode == 40){ // DOWN
    if(world[ninjaman.y + 1][ninjaman.x] != 1){
      ninjaman.y++;
      if (world[ninjaman.y][ninjaman.x] == 2) {
        score += 1;
      }
      if (world[ninjaman.y][ninjaman.x] == 3) {
        score += 5;
      } 
    }
  }
  world[ninjaman.y][ninjaman.x] = 0;
  document.getElementById('scoreboard').innerText = "Score: "+ score;
  drawNinjaman();
  drawWorld();
}

