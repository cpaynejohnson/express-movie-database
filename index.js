const {sequelize, DataTypes, Model} = require('./db')

const {Crew} = require('./crew')
const {Cast} = require('./cast')
const {Movie} = require('./movie')
const { BelongsTo } = require('sequelize/dist')

//model associaions
Cast.BelongsTo(Movie)
Crew.BelongsTo(Movie)

Movie.hasMany(Crew)
Movie.hasMany(Cast)

module.exports = {Crew, Cast, Movie, sequelize}