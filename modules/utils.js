function waveText(text) {
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

function scrollButtonHandler(el) {
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

// implements----------------------------------
waveText("No experiece was found yet😓");

let navItems = document.querySelectorAll(".nav-item");

navItems.forEach((navItem) => {
	navItem.addEventListener("click", () => {
		scrollButtonHandler(navItem);
	});
});
