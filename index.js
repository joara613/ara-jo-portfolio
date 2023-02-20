const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const router = express.Router();
const path = require("path");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
	res.render("pages/main-page");
});

app.get("/music-player", function (req, res) {
	res.render("pages/music-player");
});

// app
// 	.route("/")
// 	.get((req, res) => {
// 		res.sendFile("/index.html");
// 	})
// 	.post(async (req, res) => {
//SMTP transport
// 1
// const transporter = nodemailer.createTransport({
// 	port: 465, // true for 465, false for other ports
// 	host: "smtp.gmail.com",
// 	auth: {
// 		type: "OAuth2",
// 		user: "joara613@gmail.com",
// 		clientId: process.env.ID,
// 		clientSecret: process.env.SECRET,
// 	},
// 	secure: true,
// });
// 2
// const transporter = nodemailer.createTransport({
// 	service: "gmail",
// 	auth: {
// 		user: process.env.ID, // your email address
// 		pass: process.env.PASS, // your email password
// 	},
// });

// const mailData = {
// 	from: "joara613@gmail.com", // sender address
// 	to: "joara613@gmail.com", // list of receivers
// 	subject: "[nodemailer]" + req.body.name + " : " + req.body.subject,
// 	// text: req.body.content,
// 	html: `${req.body.email}</br>${req.body.content}`,
// 	generateTextFromHTML: true,
// };

// const accessToken = await oAuth2Client.getAccessToken();

// const transporter = nodemailer.createTransport({
// 	service: "gmail",
// 	auth: {
// 		type: "OAuth2",
// 		user: "joara613@gmail.com",
// 		clientId: process.env.ID,
// 		clientSecret: process.env.SECRET,
// 		accessToken: accessToken.token,
// 	},
// });

// let transporter = nodemailer.createTransport({
// 	host: "smtp.gmail.com",
// 	port: 465,
// 	secure: true,
// 	auth: {
// 		type: "OAuth2",
// 		user: process.env.EMAIL,
// 	},
// });

// transporter.set("oauth2_provision_cb", (user, renew, callback) => {
// 	let accessToken = userTokens[user];
// 	if (!accessToken) {
// 		return callback(new Error("Unknown user"));
// 	} else {
// 		return callback(null, accessToken);
// 	}
// });

// 	transporter.sendMail(mailData, function (err, info) {
// 		if (err) console.log(err);
// 		else console.log(info);
// 	});
// });

app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port 3000`);
});
