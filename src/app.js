const express = require('express')
const path = require('path')
const methodOverride = require('method-override')

const userRoutes = require('./routes/user.routes')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/users', userRoutes)

app.get('/', (req, res) =>{
    res.render('index')
})
module.exports = app