export function scrollButtonHandler(el) {
	let height;
	let text;

	if (el.dataset.nextpage) {
		text = el.dataset.nextpage;
	} else if (el.innerHTML) {
		text = el.innerHTML;
	} else{
		text = el;
	}

	switch (text) {
		case "Home":
			height = 0;
			break;
		case "About":
			height = innerHeight;
			break;
		case "Skills":
			height = innerHeight * 2;
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
	}
	window.scroll({
		behavior: "smooth",
		left: 0,
		top: height,
	});
}

// implement

// scroll Handler
let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		scrollButtonHandler(navItem);
	});
});

// scroll down button
let scrollDownBtnEls = document.querySelectorAll(".scroll-down-btn-container");

scrollDownBtnEls.forEach((btn) => {
	btn.addEventListener("click", () => {
		scrollButtonHandler(btn);
	});
});
