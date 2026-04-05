const db = require("../config/db");

// Get all poll options
exports.getAllPollOptions = (req, res) => {
  db.query("SELECT * FROM poll_options", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Create a new poll option
exports.createPollOption = (req, res) => {
  const { poll_id, option_text } = req.body;

  const sql = "INSERT INTO poll_options (poll_id, option_text) VALUES (?, ?)";

  db.query(sql, [poll_id, option_text], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Poll option created",
        option_id: result.insertId
      });
    }
  });
};