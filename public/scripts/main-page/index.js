import "./canvas/canvas.js";

// utils
import "./utils/fadeoutEffect.js";
import "./utils/disappearByScroll.js";
import "./utils/scrollButtonHandler.js";
import "./utils/changeJobDetails.js";
import "./utils/menuPage.js";
import "./utils/waveText.js";
import "./utils/overlay.js";
import "./utils/showWork.js";
import "./utils/formSubmitted.js";

// open email app
const openEmailEl = document.querySelector(".open-email");
openEmailEl.addEventListener("click", () => {
	window.open("mailto:joara613@gmail.com");
});
