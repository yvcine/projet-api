// models/index.js
const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Role = require("./Role")(sequelize, DataTypes);
const User = require("./User")(sequelize, DataTypes);
const Task = require("./Task")(sequelize, DataTypes);
const UnderTask = require("./UnderTask")(sequelize, DataTypes);
const TaskReset = require("./TaskReset")(sequelize, DataTypes);
const UserTask = require("./UserTask")(sequelize, DataTypes);
const XPLog = require("./XPLog")(sequelize, DataTypes);

// Associations
Role.hasMany(User, { foreignKey: "roleId" });
User.belongsTo(Role, { foreignKey: "roleId" });

User.hasMany(UserTask, { foreignKey: "userId" });
UserTask.belongsTo(User, { foreignKey: "userId" });

Task.hasMany(UserTask, { foreignKey: "taskId" });
UserTask.belongsTo(Task, { foreignKey: "taskId" });

Task.hasMany(UnderTask, { foreignKey: "taskId" });
UnderTask.belongsTo(Task, { foreignKey: "taskId" });

Task.hasMany(TaskReset, { foreignKey: "taskId" });
TaskReset.belongsTo(Task, { foreignKey: "taskId" });

User.hasMany(XPLog, { foreignKey: "userId" });
XPLog.belongsTo(User, { foreignKey: "userId" });

module.exports = {
  sequelize,
  Role,
  User,
  Task,
  UnderTask,
  TaskReset,
  UserTask,
  XPLog
};
