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

// implements----------------------------------

let text = document.querySelector(".no-experience-text").innerHTML;
waveText(text);
