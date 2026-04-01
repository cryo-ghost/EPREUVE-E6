const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  // Conserver le format amélioré
  res.json({
    status: "healthy",
    uptime_seconds: process.uptime(),
    checked_at: new Date().toISOString()
  });
});

app.get("/api/activities", (req, res) => {
  // Retourne un tableau d'activités exemple
  res.json([
    { id: 1, type: "run", distance_km: 5, timestamp: new Date().toISOString() }
  ]);
});

// Endpoint pour ajouter une activité
app.post("/api/activities", (req, res) => {
  const activity = req.body || { id: 2, type: "bike", distance_km: 20 };
  res.status(201).json({ created: true, activity });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));