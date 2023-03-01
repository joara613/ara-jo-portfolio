const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit",()=>{
	localStorage.setItem("contactForm", "submmitted");
});

// Check local storage
const wasFormSubmitted = localStorage.getItem("contactForm");
if (wasFormSubmitted) {
	contactForm.innerHTML = `<h1 class="form-submitted-msg">The email was sent successfully.</h1>`;
}
