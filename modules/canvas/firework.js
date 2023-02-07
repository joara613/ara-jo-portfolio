const gravity = 0.005;
const friction = 0.99;

// Objects
class Firework {
	constructor(x, y, radius, color, velocity) {
		this.x = x;
		this.y = y;
		this.radius = radius;
		this.color = color;
		this.velocity = velocity;
		this.alpha = 1;
	}

	draw(c) {
		c.save();
		c.globalAlpha = this.alpha;
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.fillStyle = this.color;
		c.fill();
		c.closePath();
		c.restore();
	}

	update(c) {
		this.draw(c);
		this.velocity.x *= friction;
		this.velocity.y *= friction;
		this.velocity.y += gravity;
		this.x += this.velocity.x;
		this.y += this.velocity.y;
		this.alpha -= 0.005;
	}
}

export default Firework;
