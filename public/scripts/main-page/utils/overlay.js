function showOverlay(el) {
	el.style.visibility = "visible";
}

function hideOverlay(el) {
	el.style.visibility = "hidden";
}

// Imprements
const workEls = document.querySelectorAll(".work");
const overlayEls = document.querySelectorAll(".work__detail-page");

workEls.forEach((el, i) => {
	el.addEventListener("mouseover", () => showOverlay(overlayEls[i]));
	el.addEventListener("mouseout", () => hideOverlay(overlayEls[i]));
});
