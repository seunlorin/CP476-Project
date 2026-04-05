const db = require("../config/db");

exports.getAllPolls = (req, res) => {
  db.query("SELECT * FROM poll", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
};

exports.createPoll = (req, res) => {
  const { forum_id, question } = req.body;

  const sql = "INSERT INTO poll (forum_id, question) VALUES (?, ?)";

  db.query(sql, [forum_id, question], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(201).json({
        message: "Poll created",
        poll_id: result.insertId
      });
    }
  });
};