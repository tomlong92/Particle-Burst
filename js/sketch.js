/*
	Particle Burst!
*/ 

var ballGroup;

function setup(){
	createCanvas(windowWidth, windowHeight);
	ballGroup = new ParticleGroup(50);
}

function draw() {
	background(255);
	ballGroup.draw();
	ballGroup.update();
}

