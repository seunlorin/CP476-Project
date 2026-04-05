const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const forumsRoutes = require("./routes/forums.routes");
const pollRoutes = require("./routes/poll.routes");
const pollOptionsRoutes = require("./routes/poll_options.routes");
const votesRoutes = require("./routes/votes.routes");

app.use("/api/forums", forumsRoutes);
app.use("/api/poll", pollRoutes);
app.use("/api/poll-options", pollOptionsRoutes);
app.use("/api/votes", votesRoutes);

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});