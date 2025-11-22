const User = require("./User");
const Role = require("./Role");
const Task = require("./Task");
const UserTask = require("./UserTask");
const TaskReset = require("./TaskReset");
const XPLog = require("./XPLog");

// Roles ↔ Users
Role.hasMany(User, { foreignKey: "role_id" });
User.belongsTo(Role, { foreignKey: "role_id" });

// Users ↔ Tasks via UserTask
User.belongsToMany(Task, { through: UserTask, foreignKey: "user_id" });
Task.belongsToMany(User, { through: UserTask, foreignKey: "task_id" });

// Task ↔ TaskReset
Task.hasMany(TaskReset, { foreignKey: "task_id" });
TaskReset.belongsTo(Task, { foreignKey: "task_id" });

// Users ↔ XPLog
User.hasMany(XPLog, { foreignKey: "user_id" });
XPLog.belongsTo(User, { foreignKey: "user_id" });

// Tasks ↔ XPLog
Task.hasMany(XPLog, { foreignKey: "task_id" });
XPLog.belongsTo(Task, { foreignKey: "task_id" });
