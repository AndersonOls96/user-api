const User = require('../model/user.model')

exports.list = (req, res) =>{
    const users = User.findAll()
    res.json(users)
}

exports.getById = (req, res) =>{
    const user = User.findById(Number(req.params.id))
    if (!user) return res.status(400).json({error: "User not found"})
        res.json(user)
}

exports.create = (req, res) =>{
    const { name, email } = req.body

    if(!name || !email){
        return res.status(400).json({error: 'Name and email required'})
    }

    const user = User.create({ name, email })
    res.status(201).json(user)
}