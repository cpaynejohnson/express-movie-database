const {Crew, Cast, Movie, sequelize} = require('./index')

describe('Movie Database', () => {
    beforeAll(async() => {
    //reset database
        await sequelize.sync({force:true})
    
    //create array of Movies
        const arrayOfMovies = [
            {title: 'Only in America', date_released: '1997-11-15', running_time_mins: '112', mpa_rating: 'R'},
            {title: 'Malcolm X', date_released: '1992-11-18', running_time_mins: '112', mpa_rating: 'PG-13'},
            {title: 'Nutty Professor', date_released: '1996-04-16', running_time_mins: '95', mpa_rating: 'PG-13'},
            {title: 'Zootopia', date_released: '2016-06-07', running_time_mins: '108', mpa_rating: 'G'}
        ]
        const arrayOfCast = [
            {cast_member_name: 'Ving Rhames', character_name: 'Don King', speaking_role: true},
            {cast_member_name: 'Crystal Johnson', character_name: 'Cafe Extra', speaking_role: false},
            {cast_member_name: 'Denzel Washington', character_name: 'Malcolm X', speaking_role: true},  
            {cast_member_name: 'Ginnifer Goodwin', character_name: 'Judy Hopps', speaking_role: true}   
        ]
        const arrayOfCrew = [
            {crew_member_name: 'Spike Lee', job_title: 'Director', experience_years: '38'},
            {crew_member_name: 'Crystal Payne', job_title: 'Camera Operator', experience_years: '25'},
            {crew_member_name: 'George Lucas', job_title: 'Producer', experience_years: '54'},
            {crew_member_name: 'Ron Howard', job_title: 'Director', experience_years: '44'}
        ]
    await Movie.bulkCreate(arrayOfMovies)
    await Cast.bulkCreate(arrayOfCast)
    await Crew.bulkCreate(arrayOfCrew)
    })
    test ('Movies have a Title and MPA rating', async() => {
        const movieTitle = await Movie.findOne({where: {title: 'Zootopia'}})
        expect(movieTitle.title).toBe('Zootopia') && expect(movieTitle.mpa_rating).toBe('G')
    })
    test ('Cast have a name and if they have a speaking role', async() => {
        const castName = await Cast.findOne({where: {cast_member_name: 'Crystal Johnson'}})
        expect(castName.cast_member_name).toBe('Crystal Johnson') && expect(castName.speaking_role).toBe('false')
    })
    test ('Crew have a name and a job title', async() => {
        const crewName = await Crew.findOne({where: {crew_member_name: 'Spike Lee'}})
        expect(crewName.crew_member_name).toBe('Spike Lee') && expect(crewName.job_title).toBe('Director')
    })
    // test('Movies can have many cast', async() => {
    //     const manyCast =  await Movie.findAll({where: {speaking_role: 'true'}})

    // })

    afterAll(async()=> {
    sequelize.close
})
})