// Work list
const works = [
	{
		name: "Music Player",
		id: "music-player",
		img: "/images/main-page/music-player2.gif",
		skills: ["HTML5", "Javascript"],
		withSound: true,
		github: "",
	},
	{
		name: "Joke Teller",
		id: "joke-teller",
		img: "/images/main-page/joke-teller2.gif",
		skills: ["APIs", "Javascript"],
		withSound: true,
		github: "",
	},
	{
		name: "Light Dark Mode",
		id: "light-dark-mode",
		img: "/images/main-page/joke-teller2.gif",
		skills: ["CSS", "Javascript"],
		withSound: false,
		github: "",
	},
	{
		name: "Template",
		id: "template",
		img: "/images/main-page/joke-teller2.gif",
		skills: ["Scss", "Javascript"],
		withSound: false,
		github: "",
	},
];

// Icons
const icons = [
	{
		name: "HTML5",
		class: "fa-html5",
	},
	{
		name: "CSS3",
		class: "fa-css3",
	},
	{
		name: "JavaScript",
		class: "fa-js",
	},
	{
		name: "PHP",
		class: "fa-php",
	},
	{
		name: "SASS",
		class: "fa-sass",
	},
	{
		name: "Wordpress",
		class: "fa-wordpress-simple",
	},
	{
		name: "React",
		class: "fa-react",
	},
	{
		name: "Git Hub",
		class: "fa-github",
	},
	{
		name: "Node.js",
		class: "fa-node-js",
	},
	{
		name: "Python",
		class: "fa-python",
	},
];

// Template navItems
const navItems = [
	{
		name: "HOME",
		dropdown: [],
	},
	{
		name: "OUR STORY",
		dropdown: [],
	},
	{
		name: "SERVICES",
		dropdown: [],
	},
	{
		name: "OUR TEAM",
		dropdown: [],
	},
	{
		name: "CONTACT US",
		dropdown: [],
	},
];

module.exports = { works, icons, navItems };
