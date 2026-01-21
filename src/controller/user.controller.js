const User = require('../model/user.model')

exports.list = (req, res) =>{
    const users = User.findAll()
    res.render('listUsers', { users })
}

exports.getById = (req, res) =>{
    const user = User.findById(Number(req.params.id))
    if (!user) return res.status(400).json({error: "User not found"})
        res.json(user)
}

exports.create = async (req, res) => {
  const { name, email } = req.body

  if (!name || !email) {
    return res.render('createView', {
      error: 'Nome e email são obrigatórios',
      success: null,
      old: { name, email }
    })
  }

  await User.create({ name, email })
  res.redirect('/users/new?success=1')
}



exports.createView = (req, res) => {
  res.render('createView', {
    success: req.query.success,
    error: null,
    old: {}
  })
}



exports.update = (req, res) =>{
    const id = Number(req.params.id)
    const { name, email } = req.body

    const updated = User.update(id, { name, email })
    if (!updated) return res.status(404).send('User not found')
    
    res.status(200).json(updated)
}

exports.remove = (req, res) =>{
    const id = Number(req.params.id)

    const removed = User.remove(id)

    if(!removed) return res.status(404).json({error: "User not found"})

    res.status(204).json({message: "User removed with sucess"})
}

