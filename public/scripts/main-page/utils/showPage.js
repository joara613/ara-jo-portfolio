function showPage(el) {
	if (el.dataset.id) {
		let route = el.dataset.id;
		if (el.dataset.type == "live") {
			window.open(`/works/${route}`, "_blank");
		} else if (el.dataset.type == "code") {
			window.open(`https://github.com/joara613/${route}`, "_blank");
		}
	}
}

// implements
const viewLiveBtns = document.querySelectorAll(".view-live");
const showCodeBtns = document.querySelectorAll(".view-git");

viewLiveBtns.forEach((el) => {
	el.addEventListener("click", () => showPage(el));
});

showCodeBtns.forEach((el) => {
	el.addEventListener("click", () => showPage(el));
});
