let person = {
  name: "Mosh",
  age: 30,
};

let name = "Mosh";

let persons = [
  { name: "Giorgi", age: 30 },
  { name: "John", age: 20 },
  { name: "Elene", age: 40 },
];

console.log(typeof persons);
console.log(Array.isArray(person));

let newUser = {
  name: "Jack",
  age: 50,
};
persons.push(newUser);

let moreThanFourSymbols = [];

for (let index = 0; index < persons.length; index++) {
  const element = persons[index];
  if (element.name.length > 4 && element.age > 35) {
    moreThanFourSymbols.push({
      ...element,
      name: element.name.toUpperCase(),
      isVisible: true,
    });
  }
}
console.log(moreThanFourSymbols);

let a = 10;
let b = 20;
let z = a + b;

let x = 10;
let y = 20;
let c = x + y;

//functions
function getSum(a, b) {
  let z = a + b;

  function getSum2(a, b) {
    let z = a + b;

    return z;
  }
  getSum2(10, 20);
}

let sum = getSum(10, 20);
let sum2 = getSum(30, 20);
let sum3 = getSum(40, 20);
let sum4 = getSum(50, 20);
let sum5 = getSum(60, 20);
console.log(sum);

let getNameToUpperCase = function (name) {
  let uppercase = name.toUpperCase();
  return uppercase;
};
let uppercase = getNameToUpperCase("John");
console.log(uppercase);

let getNameToLoweCase = (name) => name.toLowerCase();

console.log(getNameToLoweCase("JOHN"));

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers2 = numbers;

let newNumbers = numbers.map((number) => number * 2);
let oddNumbers = numbers.filter((number) => number % 2 !== 0);

let newOddNumbers = [];
function getOddNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 !== 0) {
      newOddNumbers.push(element);
    }
  }
}
getOddNumbers(numbers);

let findNumber = numbers.find((number) => {
  return number === 5;
});
console.log(findNumber);
