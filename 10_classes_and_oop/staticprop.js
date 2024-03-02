class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`)
    }
    static creteId(){
        return `123`
    }
}

const raj = new user ("Raj")

//console.log(raj.creteId());


class Teacher extends user{
    constructor (username, email){
        super(username)
        this.email = email
    }
}

const book = new Teacher("book1", "book@gmail.com")
console.log(book.creteId());