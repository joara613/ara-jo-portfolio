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

// Loading page fadeout
let loadingEl = document.getElementById("loading-page");

window.onload = (event) => {
	setTimeout(() => {
		fadeOutEffect(loadingEl);
	}, 1000);
};
