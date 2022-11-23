const express = require("express");
const multer = require("multer");

const userControler = require("../controlers/userControler");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/login", userControler.login);
router.post("/signup", upload.single("avatar"), userControler.signup);

module.exports = router;
