let users = []
let id = 1

exports.findAll = () =>{
    return users
}

exports.create = (data) =>{
    const user = { id: id++, ...data }
    users.push(user)
    return user
}