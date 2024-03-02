class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{         // here Teacher is child class of user where user is parentclass of teacher
    constructor(username, email, password){
        super(username)        // The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
        this.email = email       
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const raj = new Teacher("Raj", "raj@teacher.com", "123")

raj.addCourse()// this will give console the output of line 19 


raj.logMe() // this will give console the output of line 7 

const coffe = new User("coffe")

coffe.logMe()

//console.log(chai instanceof User);