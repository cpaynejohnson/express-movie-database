const {sequelize, DataTypes, Model} = require('./db')

const {Crew} = require('./models/crew')
const {Cast} = require('./models/cast')
const {Movie} = require('./models/movie')
const { BelongsTo } = require('sequelize/dist')

//model associaions
Cast.belongsTo(Movie)
Crew.belongsTo(Movie)

Movie.hasMany(Crew)
Movie.hasMany(Cast)

module.exports = {Crew, Cast, Movie, sequelize}