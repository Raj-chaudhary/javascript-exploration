// let myName = "Raj     "
// let mycourse = "javascript     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.raj = function(){
    console.log(`Raj is present in all objects`);
}

Array.prototype.heyRaj = function(){
    console.log(`Raj says hello`);
}

 heroPower.raj()
 myHeros.raj()
 myHeros.heyRaj()
 //heroPower.heyRaj()   // this is not a function 




// inheritance

//old syntax
const User = {
    name: "DGI",
    email: "hey@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "JavascriptExploration     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"raj".trueLength()
"javascript".trueLength()