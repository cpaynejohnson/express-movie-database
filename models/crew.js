const {sequelize} = require('../db')
const {DataTypes, Model} = require('sequelize')

class Crew extends Model {}
    Crew.init({
    crew_member_name: DataTypes.STRING,
    job_title: DataTypes.STRING,
    experience_years: DataTypes.INTEGER
},  {
    sequelize,
    timestamps: false    
})

module.exports = {Crew}