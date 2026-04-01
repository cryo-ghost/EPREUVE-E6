const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date() });
});

app.get("/api/activities", (req, res) => {
  // Retourne un tableau d'activités exemple
  res.json([
    { id: 1, type: "run", distance_km: 5, timestamp: new Date().toISOString() }
  ]);
});

// Nouveau endpoint pour ajouter une activité
app.post("/api/activities", (req, res) => {
  const activity = req.body || { id: 2, type: "bike", distance_km: 20 };
  // Ici on ne persiste pas, on renvoie juste l'objet reçu
  res.status(201).json({ created: true, activity });
});

app.listen(3000, () => console.log("VitalSync API on :3000"));