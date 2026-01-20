const express = require('express')
const path = require('path')

const userRoutes = require('./routes/user.routes')

const app = express()

app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/users', userRoutes)

app.get('/', (req, res) =>{
    res.send('API Express funcionando!')
})
module.exports = app