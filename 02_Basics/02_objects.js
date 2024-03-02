// singleton
// Object.create

// object literals

const mySym = Symbol("key")


const JsUser = {
    name: "Raj",
    "full name": "Raj Chaudhary",
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "Raj@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//  console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "Raj@cgemini.com"
// Object.freeze(JsUser)                      // freeze will dont allow you to do changes in objects
JsUser.email = "raj@mvm.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());







// const tinderUser = new Object()
const bumbbleUser = {}

bumbbleUser.id = "123abc"
bumbbleUser.name = "sunny"
bumbbleUser.isLoggedIn = false

// console.log(bumbbleUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Raj",
            lastname: "chaudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2, obj4)   // 

const obj3 = {...obj1, ...obj2}
 console.log(obj3);


const users = [
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    },
    {
        id: 1,
        email: "R@gmail.com"
    },
]

users[1].email
// console.log(bumbbleUser);

// console.log(Object.keys(bumbbleUser));
// console.log(Object.values(bumbbleUser));
// console.log(Object.entries(bumbbleUser));

// console.log(bumbbleUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "javascript exploration",
    price: "0",
    courseInstructor: "Raj"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // in destructing we simply convert that object in short name and use that name for retriving the data

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "Raj",
//     "coursename": "javascript exploration",
//     "price": "free"
// }

[
    {},
    {},
    {}
]