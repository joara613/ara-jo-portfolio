export function waveText(text) {
	let delay = 300;

	let waveEls = document.querySelectorAll(".wave");

	waveEls.forEach((waveEl) => {
		waveEl.innerHTML = text
			.split("")
			.map((letter) => {
				return `<span>` + letter + `</span>`;
			})
			.join("");

		Array.from(waveEl.children).forEach((span, index) => {
			setTimeout(() => {
				span.classList.add("wavy");
			}, index * 60 + delay);
		});
	});
}

export function scrollButtonHandler(el) {
	let height;
	switch (el.innerHTML) {
		case "Home":
			height = 0;
			break;
		case "About":
			height = innerHeight;
			break;
		case "Experience":
			height = innerHeight * 3;
			break;
		case "Works":
			height = innerHeight * 4;
			break;
		case "Contact":
			height = innerHeight * 5;
			break;
		default:
			height = 0;
	}
	window.scroll({
		behavior: "smooth",
		left: 0,
		top: height,
	});
}

export function fadeOutEffect(targetEl) {
	var fadeEffect = setInterval(function () {
		if (!targetEl.style.opacity) {
			targetEl.style.opacity = 1;
		}
		if (targetEl.style.opacity > 0) {
			targetEl.style.opacity -= 0.02;
		} else {
			clearInterval(fadeEffect);
			targetEl.style.zIndex = "-1";
		}
	}, 20);
}

function headerHandler() {
	let doc = document.documentElement;

	let prevScroll = scrollY || doc.scrollTop;
	let curScroll;
	let direction = 0;
	let prevDirection = 0;

	let checkScroll = function () {
		/*
		 ** Find the direction of scroll
		 ** 0 - initial, 1 - up, 2 - down
		 */

		curScroll = scrollY || doc.scrollTop;
		if (curScroll > prevScroll) {
			//scrolled up
			direction = 2;
		} else if (curScroll < prevScroll) {
			//scrolled down
			direction = 1;
		}

		if (direction !== prevDirection) {
			toggleHeader(direction, curScroll);
		}

		prevScroll = curScroll;
	};

	let toggleHeader = function (direction, curScroll) {
		if (direction === 2 && curScroll > 90) {
			header.classList.add("hide");
			prevDirection = direction;
		} else if (direction === 1) {
			header.classList.remove("hide");
			prevDirection = direction;
		}
	};

	window.addEventListener("scroll", checkScroll);
}

// implements----------------------------------

// wave text
let text = document.querySelector(".no-experience-text").innerHTML;
waveText(text);

// scroll Handler
let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		scrollButtonHandler(navItem);
	});
});

// Loading page fadeout
let loadingEl = document.getElementById("loading-page");

window.onload = (event) => {
	setTimeout(() => {
		fadeOutEffect(loadingEl);
	}, 1000);
};

// header disappears when scrolling down
let header = document.querySelector(".site-header");
let headerBackground = document.querySelector(".star-background");

setTimeout(() => {
	headerHandler();
}, 200);

addEventListener("scroll", (event) => {
	if (scrollY + 500 > innerHeight) {
		header.style.opacity = "1";
		headerBackground.classList.add("visible");
	} else {
		header.style.opacity = "0.5";
		headerBackground.classList.remove("visible");
	}
});

const navIcon = document.getElementById("nav-icon");
let iconToggleOn = false;

navIcon.addEventListener("click", () => {
	iconToggleOn = !iconToggleOn;

	if (iconToggleOn) {
		navIcon.classList.add("open");
	} else {
		navIcon.classList.remove("open");
	}
});
