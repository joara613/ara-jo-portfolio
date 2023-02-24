const express = require("express");
const router = express.Router();

const variable = require("./_variable");
const { works, navItems } = variable;

works.forEach((work) => {
	switch (work.id) {
		case "template":
			router.get("/template", function (req, res) {
				res.render("pages/template", { navItems });
			});
			break;
		default:
			router.get(`/${work.id}`, function (req, res) {
				res.render(`pages/${work.id}`);
			});
	}
});

module.exports = router;
