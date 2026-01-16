let users = []
let id = 1

exports.findAll = () =>{
    return users
}

exports.findById = (id) => users.find(u => u.id === id)

exports.create = (data) =>{
    const user = { id: id++, ...data }
    users.push(user)
    return user
}