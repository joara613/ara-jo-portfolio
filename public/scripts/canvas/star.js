class StarParticle {
	constructor(x, y, radius, color) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
	}

	draw(c) {
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.shadowColor = this.color;
		c.shadowBlur = 5;
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
	}

	update(c) {
		this.draw(c);
	}
}

export default StarParticle;
