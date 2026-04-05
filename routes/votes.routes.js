const express = require("express");
const router = express.Router();

const votesController = require("../controllers/votes.controller");

// Get all votes
router.get("/", votesController.getAllVotes);

// Create a new vote
router.post("/", votesController.createVote);

module.exports = router;