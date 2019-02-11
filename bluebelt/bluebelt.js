numbers = [38, 62, 94, 50, 32, 31, 5, 67, 59, 1]

//filtering the array to get even numbers
function getEvenNumbers(numbers) {
  evenNumbers = numbers.filter(number => (number % 2) == 0); 

  return evenNumbers; 
}; 

//adding all the numbers in the array 
function addNumbers(numbers) {
  addedNumbers = 
    numbers.reduce((accumulator, currentValue) => accumulator + currentValue); 

  return addedNumbers; 
};

//logging each element of the array into the console
function printAll(numbers) {
  numbers.forEach(element => {
    console.log(element)
  }); 
};


//squaring all the numbers
function squaredNumbers(numbers) {
  squaredNumbers = numbers.map(number => number * number)
    return squaredNumbers
}; 