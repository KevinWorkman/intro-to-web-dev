
let droplets = [];



function setup() {
  createCanvas(400, 400);


}

function draw() {
  background(220);

  let c = color('hsb(160, 100%, 50%)');
  noStroke();
  fill(c);
  rect(0, 0, 150, 400);
  c = color('hsb(160, 100%, 50%)');
  fill(c);
  rect(250, 0, 150, 400);

  d = color('skyblue');
   fill(d);
   rect(150, 0, 100, 400);






     let t = frameCount / 60;


   for (let i = 0; i < random(5); i++) {
     droplets.push(new droplet());
   }


   for (let drop of droplets) {
     drop.update(t);
     drop.display();
   }
}

function droplet() {
   c = color(50, 55, 100)
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 2 * PI);
  this.size = random(2, 5);


  this.radius = sqrt(random(pow(200 / 2, 2)));

  this.update = function(time) {

    let w = 0.6;
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);


    this.posY += pow(this.size, 0.5);


    if (this.posY > height) {
      let index = droplets.indexOf(this);
      droplets.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}
