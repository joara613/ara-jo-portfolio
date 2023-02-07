class PointerParticle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = Math.random();
		this.radius = this.speed + 2;
		this.color = "#eff7b7";
		this.vx = 0;
		this.vy = 0;

		this.destination = {
			x: x,
			y: y,
		};
	}

	draw(c, x, y) {
		if (!this.x || !this.y) {
			return;
		}

		c.save();
		c.beginPath();
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.shadowColor = "white";
		c.globalAlpha = this.speed;
		c.shadowBlur = 2;

		c.fillStyle = this.color;
		c.fill();
		c.closePath();
		c.restore();

		if (this.destination.x != this.x && this.destination.y != this.y) {
			this.destination.x = x;
			this.destination.y = y;
		} else {
			this.dx = (x - this.destination.x) * this.speed * 0.1;
			this.dy = (y - this.destination.y) * this.speed * 0.4;
			this.destination.x += this.dx;
			this.destination.y += this.dy;
		}

		this.vx = (this.destination.x - this.x) * this.speed;
		this.vy = (this.destination.y - this.y) * this.speed;
		this.x += this.vx;
		this.y += this.vy;

		// this.vx = (x - this.x) * this.speed;
		// this.vy = (y - this.y) * this.speed;
	}
}

export default PointerParticle;
