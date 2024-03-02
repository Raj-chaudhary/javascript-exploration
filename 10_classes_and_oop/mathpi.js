 const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
//  console.log(descripter);



//  console.log(Math.PI);        // output 3.141592653589793
// Math.PI = 5                  
// console.log(Math.PI);         // output 3.141592653589793



const coffe = {
    name: 'Espresso',
    price: 500,
    isAvailable: true,

    orderCoffe: function(){
        console.log("Espresso is not Available");
    }
}

//console.log(Object.getOwnPropertyDescriptor(coffe, "name"));

Object.defineProperty(coffe, 'name',{
    writable: false,
    enumerable: true,
    
})

 //console.log(Object.getOwnPropertyDescriptor(coffe, "name"));

for (let [key, value] of Object.entries(coffe)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}