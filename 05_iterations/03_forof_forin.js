// for of

// ["", "", ""]                      // string
// [{}, {}, {}]                     // objects




// const arr = [1, 2, 3, 4, 5]

//for (const num of arr) {                           //  for (const iterator of object) ---- here object can be any thing array strings etc.          
   // console.log(num);
//}





const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)                          // in this every word will print 
}





// Maps:-   maps object holds the value of key pair and remember the original insertion order of key

//const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

 //console.log(map);                                  // In map it takes unique values


//for (const key of map) {
    // console.log(key);                        // This will give output:- [ 'IN', 'India' ]
//}

// for (const [key, value] of map) {
//      console.log(key, ':-', value);               // In this key and value both will show:- IN :- India
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {                  // myObject is not iteratble 
//     console.log(key, ':-', value);
    
// }




//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++




const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {                                     // forin loop work on object as well
    //console.log(`${key} shortcut is for ${myObject[key]}`); 
}


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {                   // map is not iteratable
//     console.log([key]);
// }