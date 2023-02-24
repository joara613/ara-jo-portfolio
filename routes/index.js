const express = require("express");
const router = express.Router();

var variable = require("./_variable.js");

var { works, icons } = variable;

router.get("/", function (req, res) {
	res.render("pages/main-page", { works, icons });
});

module.exports = router;
