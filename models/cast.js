const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Cast extends Model {}
    Cast.init({
    cast_name: DataTypes.STRING,
    character_name: DataTypes.STRING,
    speaking_role: DataTypes.BOOLEAN,
},  {
    sequelize,
    timestamps: false
})

module.exports = {Cast}