// ParticleGroup constructor
function ParticleGroup(size) {
	this.group = [];
	this.maxSize = size;
	for (var i = 0; i < this.maxSize; i = i + 1) {
		var radius = random(25, 50);
		var xCenter = random(radius, width - radius);
		var yCenter = random(radius, height - radius);
		var xVelocity = random(-10, 10);
		var yVelocity = random(-10, 10);
		var r = random(0, 255);
		var g = random(0, 255);
		var b = random(0, 255);
		var ball = new Particle(xCenter, yCenter, radius, xVelocity, yVelocity, r, g, b);
		this.group.push(ball);
	}
}

// Update position of each particle in group
ParticleGroup.prototype.update = function () {
	for (var i = 0; i < this.maxSize; i = i + 1){
		this.group[i].update();
	}
};

// Draw each particle in group
ParticleGroup.prototype.draw = function () {
	for (var i = 0; i < this.maxSize; i = i + 1) {
		this.group[i].draw();
	}
};
