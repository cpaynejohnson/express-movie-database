const {Sequelize, DataTypes, Model} = require('sequelize')

const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite',  //type of SQL
    storage:  './movie.sqlite',      //location of db file
    logging: false
})

module.exports = {sequelize, DataTypes, Model}