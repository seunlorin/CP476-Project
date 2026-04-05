const express = require("express");
const router = express.Router();

const pollController = require("../controllers/poll.controller");

// Get all polls
router.get("/", pollController.getAllPolls);

// Create a new poll
router.post("/", pollController.createPoll);

module.exports = router;