const express = require('express')

const userRoutes = require('./routes/user.routes')

const app = express()

app.use(express.json())

app.use('/users', userRoutes)

app.get('/', (req, res) =>{
    res.send('API Express funcionando!')
})
module.exports = app