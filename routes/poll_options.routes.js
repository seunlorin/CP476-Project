const express = require("express");
const router = express.Router();

const pollOptionsController = require("../controllers/poll_options.controller");

// Get all poll options
router.get("/", pollOptionsController.getAllPollOptions);

// Create a new poll option
router.post("/", pollOptionsController.createPollOption);

module.exports = router;