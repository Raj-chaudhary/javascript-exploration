// Immediately Invoked Function Expressions (IIFE)


// function coffe(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// }
// coffe()

(function coffe(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();                                // it will immediately execute the function- global scope ke pollution ko htane ke liye IIFE use krte hai 
// ();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Raj')
