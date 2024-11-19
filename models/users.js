const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      unique: true,
    },
    password: {
      type: DataTypes.STRING(255),
    },
    first_name: {
      type: DataTypes.STRING(50),
    },
    last_name: {
      type: DataTypes.STRING(50),
    },
    birth_date: {
      type: DataTypes.DATE,
    },
    age: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.DECIMAL(5, 2),
    },
    weight: {
      type: DataTypes.DECIMAL(5, 2),
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      onUpdate: DataTypes.NOW,
    },
    bio: {
      type: DataTypes.TEXT,
    },
    profile_picture: {
      type: DataTypes.BLOB,
    },
    address: {
      type: DataTypes.JSON,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
