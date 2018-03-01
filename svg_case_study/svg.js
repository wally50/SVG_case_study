var MakeTransparent = function(evt) {
  evt.target.setAttributeNS(null,"opacity","0.4");
}

var MakeOpaque = function(evt) {
  evt.target.setAttributeNS(null,"opacity","1");
}

function jump(evt) {
  evt.target.setAttribute('y', '5');
}

function jumpBack(evt) {
  evt.target.setAttribute('y', '10');
}

const r2 = document.querySelector('#range2').classList.remove("yellow");
const r3 = document.querySelector('#range3').classList.remove("yellow");
const r4 = document.querySelector('#range4').classList.remove("yellow");
const r5 = document.querySelector('#range5').classList.remove("yellow");
const r6 = document.querySelector('#range6').classList.remove("yellow");

function makeLightning() {
  document.querySelector('#lightning').classList.toggle("hidden");
  document.querySelector('#cloud1').classList.toggle("hidden");
  document.querySelector('#cloud2').classList.toggle("hidden");
  document.querySelector('#cloud3').classList.toggle("hidden");

  const r2 = document.querySelector('#range2').classList.toggle("yellow");
  const r3 = document.querySelector('#range3').classList.toggle("yellow");
  const r4 = document.querySelector('#range4').classList.toggle("yellow");
  const r5 = document.querySelector('#range5').classList.toggle("yellow");
  const r6 = document.querySelector('#range6').classList.toggle("yellow");

  // r2.style.fill= '#ffffd8';
  // r3.style.fill= '#ffffd8';
  // r4.style.fill= '#ffffd8';
  // r5.style.fill= '#ffffd8';
  // r6.style.fill= '#ffffd8';

}
//   var myVar = setInterval(myTimer, 1000);
//   function myTimer() {
//
//   }
// }
//
// onclick=clearInterval(myVar)







// function keyPressed(evt) {
//   if (keyCode === LEFT_ARROW) {
//     evt.target.setAttribute('fill', 'red');
//   } else if (keyCode === RIGHT_ARROW) {
//     value = 0;
//   }
// }

function draw() {
  if (mouseIsPressed) {
    fill('blue');
  } else {
    fill('red');
  }
  ellipse(mouseX, mouseY, 40, 40);
}





//   // All the paths
// var paths = [];
// // Are we painting?
// var painting = false;
// // How long until the next circle
// var next = 0;
// // Where are we now and where were we?
// var current;
// var previous;
//
//   function setup() {
//     var canvas = createCanvas(600, 500);
//     canvas.style.position = "absolute";
//     canvas.style.border   = "1px solid mistyrose";
//     canvas.parent('svg-9');
//     current = createVector(0,0);
//     previous = createVector(0,0);
//   }
//
//
//   function draw() {
//   background(200);
//
//   // If it's time for a new point
//   if (millis() > next && painting) {
//
//     // Grab mouse position
//     current.x = mouseX;
//     current.y = mouseY;
//
//     // New particle's force is based on mouse movement
//     var force = p5.Vector.sub(current, previous);
//     force.mult(0.05);
//
//     // Add new particle
//     paths[paths.length - 1].add(current, force);
//
//     // Schedule next circle
//     next = millis() + random(100);
//
//     // Store mouse values
//     previous.x = current.x;
//     previous.y = current.y;
//   }
//
//   // Draw all paths
//   for( var i = 0; i < paths.length; i++) {
//     paths[i].update();
//     paths[i].display();
//   }
// }
//
// // Start it up
// function mousePressed() {
//   next = 0;
//   painting = true;
//   previous.x = mouseX;
//   previous.y = mouseY;
//   paths.push(new Path());
// }
//
// // Stop
// function mouseReleased() {
//   painting = false;
// }
//
// // A Path is a list of particles
// function Path() {
//   this.particles = [];
//   this.hue = random(100);
// }
//
// Path.prototype.add = function(position, force) {
//   // Add a new particle with a position, force, and hue
//   this.particles.push(new Particle(position, force, this.hue));
// }
//
// // Display plath
// Path.prototype.update = function() {
//   for (var i = 0; i < this.particles.length; i++) {
//     this.particles[i].update();
//   }
// }
//
// // Display plath
// Path.prototype.display = function() {
//
//   // Loop through backwards
//   for (var i = this.particles.length - 1; i >= 0; i--) {
//     // If we shold remove it
//     if (this.particles[i].lifespan <= 0) {
//       this.particles.splice(i, 1);
//     // Otherwise, display it
//     } else {
//       this.particles[i].display(this.particles[i+1]);
//     }
//   }
//
// }
//
// // Particles along the path
// function Particle(position, force, hue) {
//   this.position = createVector(position.x, position.y);
//   this.velocity = createVector(force.x, force.y);
//   this.drag = 0.95;
//   this.lifespan = 255;
// }
//
// Particle.prototype.update = function() {
//   // Move it
//   this.position.add(this.velocity);
//   // Slow it down
//   this.velocity.mult(this.drag);
//   // Fade it out
//   this.lifespan--;
// }
//
// // Draw particle and connect it with a line
// // Draw a line to another
// Particle.prototype.display = function(other) {
//   stroke(0, this.lifespan);
//   fill(0, this.lifespan/2);
//   ellipse(this.position.x,this.position.y, 8, 8);
//   // If we need to draw a line
//   if (other) {
//     line(this.position.x, this.position.y, other.position.x, other.position.y);
//   }
//
// }
