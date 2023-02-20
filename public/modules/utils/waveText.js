export function waveText(waveEl) {
	let delay = 300;

	let text = waveEl.innertext;

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
}

export function waveIcon(waveEl) {
	let delay = 300;

	Array.from(waveEl.children).forEach((span, index) => {
		setTimeout(() => {
			span.classList.add("wavy");
		}, index * 60 + delay);
	});
}

// implements----------------------------------
const scrollDownBtns = document.querySelectorAll(".scroll-down-btn");

scrollDownBtns.forEach((btn) => {
	waveIcon(btn);
});
