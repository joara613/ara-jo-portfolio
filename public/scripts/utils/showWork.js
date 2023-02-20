function showWork(el) {
	if (el.id) {
		let route = el.id;
		window.open(`/${route}`, "_blank");
	}
}

// implements
const viewLiveBtns = document.querySelectorAll(".view-live");
viewLiveBtns.forEach((el) => {
	el.addEventListener("click", () => showWork(el));
});
