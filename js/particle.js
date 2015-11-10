// Particle constructor - defines the Particle object and any of its variables 
function Particle (xCenter, yCenter, radius, xVelocity, yVelocity, r, g, b) {
	// Position
	this.xCenter = xCenter;
	this.yCenter = yCenter;
	// Size
	this.radius = radius;
	// Speed
	this.xVelocity = xVelocity;
	this.yVelocity = yVelocity;
	// Color
	this.r = r;
	this.g = g;
	this.b = b;
}

// Update position of each particle and check for wall collisions
Particle.prototype.update = function () {
	// Update particle position using velocity
	this.xCenter = this.xCenter + this.xVelocity;
	this.yCenter = this.yCenter + this.yVelocity;
	// Bouncing Logic!
	// Left wall
	if (this.xCenter <= this.radius) {
		this.xCenter = this.radius;
		this.xVelocity = this.xVelocity * -1;
	}
	// Right wall
	if (this.xCenter > width - this.radius) {
		this.xCenter = width - this.radius;
		this.xVelocity = this.xVelocity * -1;
	}
	// Top wall
	if (this.yCenter < this.radius) {
		this.yCenter = this.radius;
		this.yVelocity = this.yVelocity * -1;
	}
	// Bottom wall
	if (this.yCenter > height - this.radius) {
		this.yCenter = height -this.radius;
		this.yVelocity = this.yVelocity * -1;
	}
};

// Draw the particle
Particle.prototype.draw = function () {
	fill(this.r, this.g, this.b);
	noStroke();
	ellipse(this.xCenter, this.yCenter, this.radius * 2, this.radius * 2);
};
