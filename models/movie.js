const {sequelize} = require('./db')
const {DataTypes, Model} = require('sequelize')

class Movie extends Model {}

    Movie.init({
    title: DataTypes.STRING,
    date_released: DataTypes.DATEONLY,
    running_time: DataTypes.INTEGER,
    mpa_rating: DataTypes.STRING,
},  {
    sequelize,
    timestamps: false
})

module.exports = {Movie}