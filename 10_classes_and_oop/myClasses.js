// ES6


// using class
class user{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return(`${this.password}abc`)
    }

    newUserName(){
        return(`${this.username.toUpperCase()}`)
    }
}

const client = new user ("Alpha", "alpha@gmail.com", "123")

console.log(client.encryptPassword());
console.log(client.newUserName());





// Behind the scene

// without class

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const coffe = new User("coffe", "coffe@gmail.com", "123")

console.log(coffe.encryptPassword());
console.log(coffe.changeUsername());