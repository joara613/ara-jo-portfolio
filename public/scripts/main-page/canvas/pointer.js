class PointerParticle {
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.speed = Math.random();
		this.originalR = this.speed + 2;
		this.radius = this.speed + 2;
		this.color = "transparent";
		this.vx = 0;
		this.vy = 0;

		this.destination = {
			x: x,
			y: y,
		};
	}

	draw(c, x, y) {
		if (!x || !y) {
			return;
		}
		this.color = "#eff7b7";
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

	clickHandler(clicked) {
		if (clicked) {
			this.smaller();
		} else {
			this.bigger();
		}
	}

	smaller() {
		if (this.radius >= 0.1) {
			this.radius -= 0.1;
		} else {
			this.radius = 0;
		}
	}

	bigger() {
		if (this.radius < this.originalR) {
			this.radius += 0.1;
		} else {
			this.radius = this.originalR;
		}
	}
}

export default PointerParticle;
