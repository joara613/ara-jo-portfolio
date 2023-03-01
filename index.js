const express = require("express");
const ejs = require("ejs");
// const nodemailer = require("nodemailer");
const app = express();

var indexRoute = require("./routes/index");
var worksRoute = require("./routes/works");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use("/", indexRoute);
app.use("/works", worksRoute);


app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port 3000`);
});
