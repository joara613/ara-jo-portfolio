const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const app = express();

var indexRoute = require("./routes/index");
var worksRoute = require("./routes/works");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/works", worksRoute);

// // github address should be added
// const works = [
// 	{
// 		name: "Music Player",
// 		id: "music-player",
// 		img: "/images/main-page/music-player2.gif",
// 		skills: ["HTML5", "Javascript"],
// 		withSound: true,
// 		github: "",
// 	},
// 	{
// 		name: "Joke Teller",
// 		id: "joke-teller",
// 		img: "/images/main-page/joke-teller2.gif",
// 		skills: ["APIs", "Javascript"],
// 		withSound: true,
// 		github: "",
// 	},
// 	{
// 		name: "Light Dark Mode",
// 		id: "light-dark-mode",
// 		img: "/images/main-page/joke-teller2.gif",
// 		skills: ["CSS", "Javascript"],
// 		withSound: false,
// 		github: "",
// 	},
// 	{
// 		name: "Template",
// 		id: "template",
// 		img: "/images/main-page/joke-teller2.gif",
// 		skills: ["Scss", "Javascript"],
// 		withSound: false,
// 		github: "",
// 	},
// ];

// const icons = [
// 	{
// 		name: "HTML5",
// 		class: "fa-html5",
// 	},
// 	{
// 		name: "CSS3",
// 		class: "fa-css3",
// 	},
// 	{
// 		name: "JavaScript",
// 		class: "fa-js",
// 	},
// 	{
// 		name: "PHP",
// 		class: "fa-php",
// 	},
// 	{
// 		name: "SASS",
// 		class: "fa-sass",
// 	},
// 	{
// 		name: "Wordpress",
// 		class: "fa-wordpress-simple",
// 	},
// 	{
// 		name: "React",
// 		class: "fa-react",
// 	},
// 	{
// 		name: "Git Hub",
// 		class: "fa-github",
// 	},
// 	{
// 		name: "Node.js",
// 		class: "fa-node-js",
// 	},
// 	{
// 		name: "Python",
// 		class: "fa-python",
// 	},
// ];

// app.get("/", function (req, res) {
// 	res.render("pages/main-page", { works, icons });
// });

// portfolio work pages
// works.forEach((work) => {
// 	app.get(`/${work.id}`, function (req, res) {
// 		res.render(`pages/${work.id}`);
// 	});
// });

app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port 3000`);
});
