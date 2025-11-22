const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const TaskReset = sequelize.define("TaskReset", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  task_id: { type: DataTypes.INTEGER, allowNull: false },
  reset_time: { type: DataTypes.DATE, allowNull: false },
});

module.exports = TaskReset;
