// import "./modules/canvas.js";
// import "./modules/utils.js";

const express = require("express");
const app = express();
// const path = require("path");
const port = 3000;

// app.set('views',path.join(__dirname))

app.use("/static", express.static(__dirname + "/modules/app.js"));
app.use("/static", express.static(__dirname + "/css/style.css"));
app.use("/static", express.static(__dirname + "/images"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
