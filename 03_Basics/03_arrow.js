const user = {
    username: "Raj",
    price: "Free",

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
//  user.username = "chaudhary"
//  user.welcomeMessage()

 //console.log(this);

//  function coffe(){
//      let username = "Raj"
//      console.log(this.username);
//  }

//  coffe()                                      // this will  give undefined because in fuction "this" is not working 

// const coffe = function () {
//     let username = "Raj"
//     console.log(this.username);
// }
// coffe()                                 // this will also give undefined because in fuction "this" is not working  




// const coffe =  () => {
//     let username = "Raj"
//     console.log(this);
// }
// coffe()                      // this will give empty object { }

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5))          // this will give 8




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }                                         // in curly bracket we have to write return - explicit return




 // const addTwo = (num1, num2) =>  num1 + num2       //  implicit return
// console.log(addTwo(8,8));

//  const addTwo = (num1, num2) => ( num1 + num2 )           // and if use parenthesis then no need of return 
// console.log(addTwo(8,1));           // this will give 9

// const addTwo = (num1, num2) => ({username: "Raj"})
// console.log(addTwo(3, 4))                // this will give { username: 'Raj' }


const myArray = [2, 5, 3, 7, 8]

myArray.forEach()