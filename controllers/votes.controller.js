const db = require("../config/db");

// Get all votes
exports.getAllVotes = (req, res) => {
  db.query("SELECT * FROM votes", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Create a new vote
exports.createVote = (req, res) => {
  const { poll_id, option_id } = req.body;

  const sql = "INSERT INTO votes (poll_id, option_id) VALUES (?, ?)";

  db.query(sql, [poll_id, option_id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Vote created",
        vote_id: result.insertId
      });
    }
  });
};