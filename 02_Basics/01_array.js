// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["Krishna", "Ram"]

const myArr2 = new Array(1, 2, 3, 4)
 //console.log(myArr[0]);
 //console.log(myHeros);
 //console.log(myArr2);

// Array methods

myArr.push(6)
//console.log(myArr);

myArr.push(7)
//console.log(myArr);

myArr.pop()
myArr.pop()    // add pop and last element will be popped from array

//console.log(myArr);


// myArr.unshift(9)        // unshift will add given element on the 0th index 
// console.log(myArr);

// myArr.shift()           // shift will remove element from the 0th index
// console.log(myArr);


//  console.log(myArr.includes(9));  // it will give boolean output tells whether that element is present in array or not
//  console.log(myArr.indexOf(3));   // it will give which element is present on that index

// const newArr = myArr.join()    // join will convert array into strings

// console.log(myArr);
// console.log( newArr);


// slice, splice

//  console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)    // slice did not manipulate original array

// console.log(myn1);
// console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)        // splice do change in original array i.e splice manipulate original array
// console.log("C ", myArr);
// console.log(myn2);





const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)   // In concat we can use only two arrays and returns new array
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]     //  ...arrayName this is spread operator in this operator we can take as many as arrays it gives new array

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Raj"))    // "isArray" will tells whether this is present in array or not
console.log(Array.from("Raj"))          // "from" will create array from given string
console.log(Array.from({name: "Raj"})) // interesting 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));    // this "array.of" constructor will take all the array or input and show in one array