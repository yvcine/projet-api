const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const XPLog = sequelize.define("XPLog", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  user_id: { type: DataTypes.INTEGER, allowNull: false },
  xp_gained: { type: DataTypes.INTEGER, allowNull: false },
  task_id: { type: DataTypes.INTEGER, allowNull: true }, // peut être null pour bonus ou admin
  date: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = XPLog;
