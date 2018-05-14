const Sequelize = require("sequelize")
const sequelize = require("../db")

const Like = sequelize.define(
    "like",
    {
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