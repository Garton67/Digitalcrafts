const express = require('express')
const cors = require('cors')
const app = express()
const path = require('path')
const mustacheExpress = require('mustache-express')
const { v4: uuidv4 } = require('uuid');

const VIEWS_PATH = path.join(__dirname, '/views')

app.use(express.static("css"))
app.engine('mustache', mustacheExpress(VIEWS_PATH + '/partials', '.mustache'))
app.set('views', VIEWS_PATH)
app.set('view engine', 'mustache')
const indexRouter = require('./routes/index.js')
const apiRouter = require('./routes/api.js')
const usersRouter = require('./routes/users')

app.use(cors())
app.use(express.urlencoded())

})
)


app.use('/', indexRouter)
app.use('/api', apiRouter)
app.use('/users', authenticate, usersRouter)

function authenticate(req, res, next) {
    if(req.session) {
        if(req.session.name) {
            next()
        } else {
            res.redirect("/login")
        }
    } else {
        res.redirect('/login')
    }
}


global.movies = [

]



app.listen(3000, () => {
    console.log("Movies!")
})