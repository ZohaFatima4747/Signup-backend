const express = require("express");
const cors = require("cors");
const connect = require("./routes/contact");

require("./conn/connection");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/v1/contact", connect);

// 🔹 Default route to prevent 404 on GET /
app.get("/", (req, res) => {
  res.send("Backend is running! Use /api/v1/contact for API requests.");
});

// Optional: 404 handler for other unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Start server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
