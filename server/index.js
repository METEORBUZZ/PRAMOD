import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.use(cors());
app.use(express.json());

app.get("/api/health", (_, res) => {
  res.json({ status: "ok", service: "pramod-devops-portfolio-api" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const logDir = path.join(__dirname, "data");
  fs.mkdirSync(logDir, { recursive: true });
  const file = path.join(logDir, "messages.json");
  const old = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, "utf8")) : [];
  old.push({ name, email, message, createdAt: new Date().toISOString() });
  fs.writeFileSync(file, JSON.stringify(old, null, 2));

  res.status(201).json({ message: "Message received." });
});

const dist = path.join(__dirname, "..", "dist");
if (fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get(/.*/, (_, res) => res.sendFile(path.join(dist, "index.html")));
}

app.listen(PORT, () => console.log(`Portfolio API running on port ${PORT}`));