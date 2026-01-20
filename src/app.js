const express = require('express')
const userRoutes = require('./routes/user.routes')
const path = require('path')

const app = express()


app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


app.use(express.json())

app.use('/users', userRoutes)

app.get('/', (req, res) =>{
    res.render('index')
})
module.exports = app