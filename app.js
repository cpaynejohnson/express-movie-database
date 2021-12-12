const express = require('express')
const path = require('path')
const {Movie, Cast, Crew} = require('./index')

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

// return all 
app.get('/movies', async(req,res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})
app.get('/movies/:id', async(req,res) => {
    const thisMovies = await Movie.findOne({where: {id: req.params.id}})
    res.json(thisMovies)
})
app.get('/cast', async(req,res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})
app.get('/cast/:id', async(req,res) => {
    const thisCast = await Cast.findOne({where: {id: req.params.id}})
    res.json(thisCast)
})
app.get('/crew', async(req,res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
})
app.get('/crew/:id', async(req,res) => {
    const thisCrew = await Crew.findOne({where: {id: req.params.id}})
    res.json(thisCrew)
})
app.post('/movies', async(req,res) => {
    let newCrew =  await Movie.create(req.body)
    res.send('A new movie has been created')
})
app.post('/cast', async(req,res) => {
    let newCast =  await Cast.create(req.body)
    res.send('A new cast member has been created')
})
app.post('/crew', async(req,res) => {
    let newCrew =  await Crew.create(req.body)
    res.send('A new crew member has been created')
})
app.put('/movies/:id', async(req,res) => {
    let updatedMovie = await Movie.update(req.body, {where :  {id: req.params.id}})
    res.send('The movie info has been updated accordingly')
})
app.put('/cast/:id', async(req,res) => {
    let updatedCast = await Cast.update(req.body, {where :  {id: req.params.id}})
    res.send('The cast members info has been updated accordingly')
})
app.put('/crew/:id', async(req,res) => {
    let updatedCrew = await Crew.update(req.body, {where :  {id: req.params.id}})
    res.send('The crew members info has been updated accordingly')
})
app.delete('/movies/:id', async(req,res) => {
    const deletedMovie = await Movie.destroy({where: {id: req.params.id}})
    res.send('Oh no, a movie has been deleted!')
})
app.delete('/cast/:id', async(req,res) => {
    const deletedCast = await Cast.destroy({where: {id: req.params.id}})
    res.send('Oh no, a cast member has been deleted!')
})
app.delete('/crew/:id', async(req,res) => {
    const deletedCrew = await Crew.destroy({where: {id: req.params.id}})
    res.send('Oh no, a crew member has been deleted!')
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
