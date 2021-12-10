const express = require('express')
const path = require('path')
const {Movie, Cast, Crew} = require('./index')

const app = express()
const port = 3000

app.use(express.json())

// return all 
app.get('/movies', async(req,res) => {
    const allMovies = await Movie.findAll()
    res.json(allMovies)
})
app.get('/cast', async(req,res) => {
    const allCast = await Cast.findAll()
    res.json(allCast)
})
app.get('/crew', async(req,res) => {
    const allCrew = await Crew.findAll()
    res.json(allCrew)
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
app.put('/cast/:id', async(req,res) => {
    let updatedCast = await Cast.update(req.body, {
    where :  {id:req.params.id}
    })
    res.send('The cast members info has been updated accordingly')
})
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
})
