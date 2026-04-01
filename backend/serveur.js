const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  // Nouveau format health: status healthy et uptime
  res.json({
    status: "healthy",
    uptime_seconds: process.uptime(),
    checked_at: new Date().toISOString()
  });
});

app.get("/api/activities", (req, res) => {
  res.json([]);
});

app.listen(3000, () => console.log("VitalSync API on :3000"));