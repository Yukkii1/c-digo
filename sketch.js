function setup() {
  createCanvas(600, 400);
}
let xJogador = [0, 0, 0];
let yJogador = [100, 200, 300];
let Jogador = ["🚕","🚓", "🚗"];

function draw() {
  ativajogo();
  desenhajogadores();
  desenhelinhadechegada();
  ve();
}
function ativajogo() {
  if (focused == true) {
    background("red");
  } else {
    background(`#5073B8BF`);
  }
}
function desenhajogadores() {
  textSize(70);
  for (let i = 0; i < 3; i++) text(Jogador[i], xJogador[i], yJogador[i]);
}

function desenhelinhadechegada() {
  fill("black");
  rect(550, 0, 20, 400);
  fill("Red");
  for (let yAtual = 0; yAtual < 550; yAtual += 20) rect(550, yAtual, 20, 10);
}
function ve() {
  for (let i = 0; i < 3; i++){
    if (xJogador[0] > 500) {
      text("Anjinho Venceu!", 7, 200);
      noLoop();
    }
  }
}
function keyReleased() {
  if (key === "a") {
    xJogador[1] += random(25);
  }
  if (key === "k") {
    xJogador[2] += random(25);
  }

  if (key === "m") {
    xJogador[3] += random(25);
  }
}
