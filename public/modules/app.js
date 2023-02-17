import "./canvas/canvas.js";

// utils
import "./utils/fadeoutEffect.js";
import "./utils/headerScrollHandler.js";
import "./utils/scrollButtonHandler.js";
// import "./utils/waveText.js";
import "./utils/changeJobDetails.js";
import "./utils/menuPage.js";

const openEmailEl = document.querySelector(".open-email");
openEmailEl.addEventListener("click", () => {
	window.open("mailto:joara613@gmail.com");
});
