// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");

// Import des routes
const userRoutes = require("./routes/user");
const roleRoutes = require("./routes/role");
const taskRoutes = require("./routes/task");
const userTaskRoutes = require("./routes/userTask");
const taskResetRoutes = require("./routes/taskReset");
const xpLogRoutes = require("./routes/xpLog");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);
app.use("/roles", roleRoutes);
app.use("/tasks", taskRoutes);
app.use("/user-tasks", userTaskRoutes);
app.use("/task-resets", taskResetRoutes);
app.use("/xp-logs", xpLogRoutes);

// Test connexion DB
sequelize.authenticate()
  .then(() => console.log("Connexion MySQL OK !"))
  .catch(err => console.error("Erreur MySQL :", err));

// Lancer serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Serveur lancé sur le port ${PORT}`);
});
