// PARTE B — alteração
// Único elemento generativo: o bloco azul muda subtilmente de tonalidade.

const W = 890, H = 784;
const sx = W / 800, sy = H / 784;
const paper = [239, 239, 232];
const red = [238, 36, 15];
const blueDark = [37, 38, 133];
const blueLight = [52, 58, 157];
const yellow = [255, 218, 0];
const black = [8, 8, 8];
const lineW = 17;

function setup() {
  createCanvas(W, H);
  pixelDensity(1);
}

function draw() {
  background(...paper);

  // Smooth, slow colour pulse
  const pulse = (sin(frameCount * 0.045) + 1) / 2;
  const blueNow = [
    lerp(blueDark[0], blueLight[0], pulse),
    lerp(blueDark[1], blueLight[1], pulse),
    lerp(blueDark[2], blueLight[2], pulse)
  ];

  noStroke();

  fill(...red);
  rect(0, 0, 364*sx, 312*sy);

  fill(...paper);
  rect(374*sx, 0, W-374*sx, 312*sy);
  rect(0, 329*sy, 360*sx, 174*sy);
  rect(373*sx, 329*sy, W-373*sx, 174*sy);

  fill(...yellow);
  rect(0, 520*sy, 77*sx, H-520*sy);

  fill(...paper);
  rect(87*sx, 520*sy, (366-87)*sx, H-520*sy);
  rect(624*sx, 520*sy, W-624*sx, H-520*sy);

  fill(...blueNow);
  rect(373*sx, 520*sy, (616-373)*sx, (752-520)*sy);

  // Fixed linework; bottom and right borders of the blue block are complete.
  stroke(...black);
  strokeWeight(lineW);
  strokeCap(SQUARE);
  line(0, 320*sy, W, 320*sy);
  line(368*sx, 0, 368*sx, 320*sy);
  line(366*sx, 320*sy, 366*sx, 512*sy);
  line(0, 512*sy, W, 512*sy);
  line(82*sx, 512*sy, 82*sx, H);
  line(366*sx, 512*sy, 366*sx, H);
  line(616*sx, 512*sy, 616*sx, 752*sy);
  line(366*sx, 752*sy, 616*sx, 752*sy);
}
