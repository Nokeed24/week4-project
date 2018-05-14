const Sequelize = require("sequelize")
const sequelize = require("../db")

const Like = sequelize.define(
    "like",
    {
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        breed: {
            type: Sequelize.STRING,
            allowNull: false
        }
    },
    {
        tableName: "likes",
        timestamps: false
      }
)