function disappearByScroll() {
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

// header disappears when scrolling down
let header = document.querySelector(".site-header");
let headerBackground = document.querySelector(".star-background");

setTimeout(() => {
	disappearByScroll();
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
