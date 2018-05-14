const Sequelize = require("sequelize")
const sequelize = require("../db")

const User = sequelize.define(
    "users",
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: "users",
        timestamps: false
      }
)

module.exports = User
