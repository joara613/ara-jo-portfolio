"use strict";
// Const DOM Elements
const button = document.getElementById("button");

// Functions

function gettingRandomVoice() {
	const englishVoices = [4, 5, 6];
	const randomNumber = Math.floor(Math.random() * englishVoices.length);
	return englishVoices[randomNumber];
}

function speakJoke(jokeText) {
	const joke = new SpeechSynthesisUtterance(`${jokeText}`);
	const voices = window.speechSynthesis.getVoices();
	joke.voice = voices[5];
	window.speechSynthesis.speak(joke);
}

async function getJoke() {
	let joke = "";
	const apiURL =
		"https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
	try {
		const response = await fetch(apiURL);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		speakJoke(joke);
	} catch (error) {
		console.log("whoops", error);
	}
}

// Event listener

button.addEventListener("click", () => {
	speechSynthesis.cancel();
	getJoke();
});
