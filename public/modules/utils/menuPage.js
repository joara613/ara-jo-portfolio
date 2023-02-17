import { scrollButtonHandler } from "./scrollButtonHandler.js";

const menuBtnEl = document.querySelector(".menu-icon");
const menuPage = document.getElementById("menu-page");
const menuItemEls = document.querySelectorAll(".mobile-menu__item");
const headerBackground = document.querySelector(".star-background");
const logo = document.querySelector(".logo");
const menuIcon = document.querySelector(".fa-bars");

let isPageOn = false;

menuBtnEl.addEventListener("click", () => {
	pageToggleHandler();
});

menuItemEls.forEach((el) => {
	el.addEventListener("click", () => {
		scrollButtonHandler(el);
		pageToggleHandler();
	});
});

function pageToggleHandler() {
	if (isPageOn) {
		// close the page
		menuPage.style.top = "-100%";
		headerBackground.style.display = "block";
		logo.style.display = "visible";
		menuIcon.classList.remove("fa-xmark");
		menuIcon.classList.add("fa-bars");
	} else {
		// open the page
		menuPage.style.top = "0";
		headerBackground.style.display = "none";
		logo.style.visibility = "hidden";
		menuIcon.classList.add("fa-xmark");
		menuIcon.classList.remove("fa-bars");
		menuIcon.style.opacity = "0.5";
	}
	isPageOn = !isPageOn;
}
