const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(__dirname));
app.use(express.static("/images"));
app.use(express.static(path.join(__dirname, "/css/style.css")));

app.get("/", (req, res) => {
	res.render("/index.html");
});

app.listen(process.env.PORT || 3000, () => {
	console.log(`Example app listening on port 3000`);
});
