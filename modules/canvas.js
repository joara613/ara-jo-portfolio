import StarParticle from "./canvas/star.js";
import Firework from "./canvas/firework.js";
import PointerParticle from "./canvas/pointer.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

const mouse = {
	x: 0,
	y: 0,
};

const colors = ["#2185C5", "#7ECEFD", "#f2b7ab", "#eff7b7", "#e38a8a"];

let mouseDown = false;
let clicked = false;

// Implementation---------------------------------------------
let starParticles;
let fireworkParticles;
let pointerParticles;
function init() {
	starParticles = [];
	fireworkParticles = [];
	pointerParticles = [];

	for (let i = 0; i < 400; i++) {
		const canvasWidth = canvas.width + 300;
		const canvasHeight = canvas.height + 300;

		const x = Math.random() * canvasWidth - canvasWidth / 2;
		const y = Math.random() * canvasHeight * 2 - canvasHeight;
		const radius = Math.random() * 2;
		const color = colors[Math.floor(Math.random() * colors.length)];
		starParticles.push(new StarParticle(x, y, radius, color));

		pointerParticles.push(new PointerParticle(mouse.x, mouse.y));
	}
}

// Animation Loop----------------------------------------------
let radians = 0;
let alpha = 1;
let increment = 0.0007;
function animate(t) {
	requestAnimationFrame(animate);

	// Background Sky
	c.save();
	c.globalAlpha = 0.5;
	const gradient = c.createLinearGradient(
		canvas.width / 2,
		0,
		canvas.width / 2,
		canvas.height
	);
	gradient.addColorStop(0, "black");
	gradient.addColorStop(0.65, "rgb(0, 19, 80)");
	gradient.addColorStop(0.8, "rgb(95, 13, 54)");
	gradient.addColorStop(1, "rgb(251, 255, 189)");
	c.fillStyle = gradient;
	c.fillRect(0, 0, canvas.width, canvas.height);
	c.restore();

	// Rotate Canvas
	c.save();
	c.translate(canvas.width / 2, canvas.height);
	c.rotate(radians);
	starParticles.forEach((particle) => {
		particle.update(c);
	});
	c.restore();

	// stars
	radians += increment;

	if (mouseDown && alpha >= 0.1) {
		alpha -= 0.01;
		if (increment < 0.012) {
			increment += 0.002;
		}
	} else if (!mouseDown && alpha < 1) {
		alpha += 0.01;
		if (increment > 0.001) {
			increment -= 0.001;
		}
	}

	// fireworks
	fireworkParticles.forEach((particle, i) => {
		if (particle.alpha > 0) {
			particle.update(c);
		} else {
			fireworkParticles.splice(i, 1);
		}
	});

	// mouse pointer
	pointerParticles.forEach((particle) => {
		particle.clickHandler(clicked);

		particle.draw(c, mouse.x, mouse.y);
	});
}

init();
animate();

// Event Listeners---------------------------------------------------
addEventListener("resize", () => {
	if (innerWidth > 600) {
		canvas.width = innerWidth;
		canvas.height = innerHeight;

		init();
	}
	console.log(innerWidth);
});

addEventListener("mousedown", () => {
	mouseDown = true;
});
addEventListener("mouseup", () => {
	mouseDown = false;
});

addEventListener("mousemove", (event) => {
	mouse.x = event.clientX;
	mouse.y = event.pageY;
});

// Firework Event Listener-------------------------------------------
addEventListener("click", (event) => {
	const particleCount = 400;
	const angleIncrement = (Math.PI * 2) / particleCount;
	const power = 5;

	for (let i = 0; i < particleCount; i++) {
		fireworkParticles.push(
			new Firework(mouse.x, mouse.y, 3, `hsl(${Math.random() * 360},50%,50%)`, {
				x: Math.cos(angleIncrement * i) * Math.random() * power,
				y: Math.sin(angleIncrement * i) * Math.random() * power,
			})
		);
	}
	clicked = true;
	setTimeout(() => {
		clicked = false;
	}, 1200);
});

// Button Event Listener---------------------------------------------
const viewMyWorkBtn = document.querySelector(".view-my-work");

viewMyWorkBtn.addEventListener("click", () => {
	mouseDown = true;
	setTimeout(() => {
		window.scroll({
			behavior: "smooth",
			left: 0,
			top: innerHeight,
		});
		mouseDown = false;
	}, 1000);
});

console.log(innerWidth);
