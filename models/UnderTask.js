const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const UserTask = sequelize.define("UserTask", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  task_id: { type: DataTypes.INTEGER, allowNull: false },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false },
  completed_at: { type: DataTypes.DATE, allowNull: true },
});

module.exports = UserTask;
