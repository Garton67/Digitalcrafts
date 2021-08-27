const express = require('express')
const cors = require('cors')
const app = express()
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid');

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static("css"))

app.use(cors())
app.use(express.urlencoded())
app.use(express.json())

trips = [
    {title: "Dubai",
    image: "images/dubai.jpg",
    departDate: "2020-9-12",
    returnDate: "2020-9-14",
    id: "353245324"
},
{title: "Japan",
    image: "images/japan.jpg",
    departDate: "2021-8-17",
    returnDate: "2021-9-24",
    id: "6546546247547"
},
{title: "Spain",
    image: "images/spain.jpg",
    departDate: "2021-9-15",
    returnDate: "2021-11-21",
    id: "7657357378282"
},
]

app.get('/', (req, res) => {
    res.render('index', {tripList: trips})
})

app.get('/add-trip', (req, res) => {
    res.render('add-trip')
})

app.post('/add-trip', (req, res) => {
    let tripTitle = req.body.title
    let imageURL = req.body.image
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let id = uuidv4()

    let newTrip = {title: tripTitle,
    image: imageURL,
    departDate: startDate,
    returnDate: endDate,
    id: id
    }
    trips.push(newTrip)

    res.redirect('/')
})

app.get('/remove/:id', (req, res) => {
    let removeID = req.params.id
    trips = trips.filter((trip) => trip.id != removeID)

    res.redirect('/')
})    
app.listen(3000, () => {
    console.log('Party Time!')
})