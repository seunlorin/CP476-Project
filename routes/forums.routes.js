const express = require("express");
const router = express.Router();

const forumsController = require("../controllers/forums.controller");

router.get("/", forumsController.getAllForums);
router.post("/", forumsController.createForum);

module.exports = router;