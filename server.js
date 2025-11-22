// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const sequelize = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/test", require("./routes/test"));
app.use("/users", require("./routes/user"));
app.use("/roles", require("./routes/role"));
app.use("/tasks", require("./routes/task"));
app.use("/taskResets", require("./routes/taskReset"));
app.use("/userTasks", require("./routes/userTask"));
app.use("/xpLogs", require("./routes/xpLog"));

// basic root
app.get("/", (req, res) => res.send("API opérationnelle"));

// DB connection + start server
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connexion MySQL OK !");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Serveur lancé sur le port ${PORT}`));
  } catch (err) {
    console.error("Erreur MySQL :", err);
    process.exit(1);
  }
})();
