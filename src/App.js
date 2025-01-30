const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes");
const auth = require("./middleware/auth");

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/tasks", auth, taskRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}

module.exports = app;
