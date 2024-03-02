const User = {
    _email: 'raj@gmail.com',
    _password: "abc",


    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }
}

const coffe = Object.create(User)
console.log(coffe.email);

console.log(coffe._password);

