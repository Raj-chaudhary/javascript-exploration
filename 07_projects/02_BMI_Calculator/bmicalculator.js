const form = document.querySelector('form');

// This use case i.e line 4 will give empty becasuse it will give output of height while loading this page
//const height = parseInt(document.querySelector('#height').value)


form.addEventListener('submit', function (e) {
    e.preventDefault();

   const height = parseInt(document.querySelector('#height').value);
   const weight = parseInt(document.querySelector('#weight').value);
   const results = document.querySelector('#results');

   if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = `Please enter valid height ${height}`;
   }
   else if(weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = `Please enter valid weight ${weight}`;
   }  else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the results 
    results.innerHTML = `<span>${bmi}</span>`;
   }


});