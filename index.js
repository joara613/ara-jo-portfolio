const express = require("express");
const ejs = require("ejs");
const nodemailer = require("nodemailer");
const router = express.Router();
const path = require("path");
const app = express();
require("dotenv").config();

app.set("view engine", "ejs");

// Set static folder
app.use(express.static("public"));

app.get("/", function (req, res) {
	res.render("pages/main-page");
});

app.get("/music-player", function (req, res) {
	res.render("pages/music-player");
});

app.get("/joke-teller", function (req, res) {
	res.render("pages/joke-teller");
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port 3000`);
});
