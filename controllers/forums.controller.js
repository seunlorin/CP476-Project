const db = require("../config/db");

// Get all forums
exports.getAllForums = (req, res) => {
  db.query("SELECT * FROM forums", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

// Create a new forum
exports.createForum = (req, res) => {
  const { title, description } = req.body;

  const sql = "INSERT INTO forums (title, description) VALUES (?, ?)";

  db.query(sql, [title, description], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Forum created",
        forum_id: result.insertId
      });
    }
  });
};