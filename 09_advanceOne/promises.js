// 01 Eg.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
       // console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
   // console.log("Promise consumed");
})


//02 Eg

const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        //console.log("Async task 2");
        resolve()
    }, 1000)

})
.then(function(){
   // console.log("Async 2 resolved");
})



// 03 Eg.

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Raj", email: "Raj@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    //console.log(user);
})




// 04 Eg.

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  // if true then only error and finally will execute
        if (!error) {
            resolve({username: "Raj", password: "1234"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
   // console.log(user);
    return user.username
}).then((username) => {
  //  console.log(username);
}).catch(function(error){
   // console.log(error);
}) //.finally(() => console.log("The promise is either resolved or rejected"))




//05 Eg.

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false  // if true then only error or else case will execute
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)        
});

async function consumePromiseFive(){
   try {
    const response = await promiseFive
    console.log(response);
   } catch (error) {
    console.log(error);
   }
}
consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()



// without async await we can use .then 

fetch('https://api.github.com/users/rajchaudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available,