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

exports.update = (id, data) =>{
    const index = users.findIndex(u => u.id === id)
    if(index === -1) return null

    users[index] ={
        ...users[index],
        ...data
    }

    return users[index]
}

exports.remove = (id) =>{
    const index = users.findIndex(u => u.id === id)
    if(index === -1) return null

    users.splice(index, 1)

    return true
}