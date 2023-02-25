const menuIconContainer = document.querySelector(".menu-icon-container");
const menuIcon = document.querySelector(".menu-icon");
const navEl = document.querySelector("nav");
const navItemEls = document.querySelectorAll(".nav__item");
const logoContainer = document.querySelector(".logo-container");
const headerEl = document.querySelector("header");

let isMenuPageOn = false;

menuIconContainer.addEventListener("click", () => {
	navToggle();
	console.log(navEl.style.top);
});

navItemEls.forEach((el) => {
	el.addEventListener("click", () => {
		navToggle();
	});
});

addEventListener("scroll",()=>{
	if (scrollY + 100 > innerHeight || innerWidth < 767) {
		logoContainer.style.backgroundColor = "transparent";
		headerEl.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
	} else {
		logoContainer.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
		headerEl.style.backgroundColor = "transparent";
	}
})

function navToggle() {
	if (isMenuPageOn) {
		navEl.style.top = "-100%";
				menuIcon.classList.remove("fa-xmark");
				menuIcon.classList.add("fa-bars");
	} else {
		navEl.style.top = "0";
				menuIcon.classList.add("fa-xmark");
				menuIcon.classList.remove("fa-bars");
	}
	isMenuPageOn = !isMenuPageOn;
}
