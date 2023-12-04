
const router = require("express").Router();

router.get("/", (req, res) => {
    res.render("template.ejs")
});

module.exports = router;
