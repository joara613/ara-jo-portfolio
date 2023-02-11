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
	}
	window.scroll({
		behavior: "smooth",
		left: 0,
		top: height,
	});
}

// scroll Handler
let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		scrollButtonHandler(navItem);
	});
});
