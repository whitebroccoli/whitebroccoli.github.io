let carX = 50;


function setup() {
  createCanvas(500, 500);
  console.log("Beep Boop");
}

function draw() {
  // making after images
  background(150, 50, 255, 80)

  console.log(frameCount);

if (frameCount>120) {

  if (carX >= 500) {
    carX = -50;
  } else if (carX >= 300) {
    carX += 6;
  } else {
    carX += 3;
  }
}


  // drawing car body
  noStroke();
  fill(255, 50, 50);
  // rect(50, 50, 60, 30);
  // triangle(50,50,110,80,50,80);
  triangle(carX, 50, carX + 60, 50 + 30, carX, 50 + 30);

  // drawing car wheels
  fill(0);
  ellipse(carX, 50 + 30, 20, 20);
  ellipse(carX + 50, 50 + 30, 20, 20);
}
