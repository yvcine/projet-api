// models/User.js
module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "User",
    {
      id: { type: DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING(120), allowNull: false },
      email: { type: DataTypes.STRING(200), allowNull: false, unique: true },
      password: { type: DataTypes.STRING(255), allowNull: false }, // hashed
      roleId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: true },
      isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
    },
    { tableName: "users", timestamps: true, createdAt: "createdAt", updatedAt: "updatedAt" }
  );
};
