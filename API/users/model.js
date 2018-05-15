const Sequelize = require("sequelize")
const sequelize = require("../db")

const User = sequelize.define(
    "users",
    {
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        likes: {
            type: Sequelize.INTEGER,
            allowNull: true
        }
    },
    {
        tableName: "users",
        timestamps: false
      }
)

module.exports = User
