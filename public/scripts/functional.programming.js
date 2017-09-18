// Test 1
// Make a function named doubleEach. doubleEach takes in an array and returns an
// array where every element in the array is doubled. Do not use a loop.
function doubleEach (array) {
  let double = function(num) {
    return num * 2;
  };
  return array.map (double);
}
array = [1,2,3,4,5];
console.log(doubleEach(array));

function squareEach(array) {
  function squares (num) {
    return num * num;
  }
  return array.map(squares);
}
array = [1,2,3,4,5];
console.log(squareEach(array));

function doubleAndSquareEach(array) {
  let double = function(num) {
    return num * 2;
  };
  array.map (double);
  let squares = function(num) {
    return num * num;
  };
  return array.map (squares);
}
array = [1,2,3,4,5];
console.log(doubleAndSquareEach(array));

//what map is actually doing
const myMap = (array, fn) => {
  const answer = [];
  for (let i = 0; i < array.length; i++) {
    answer.push(fn(array[i]));
  }
  return answer;
};

//Reduce
const addTogether = list => {
  return list.reduce((acc, num) => acc+num, 0);
};
let testList = [5,3,0,7,2,5,6,10,9];
console.log(addTogether(testList));

const concatenateStringsWithSpaces = list => {
  return list.reduce((acc, string) => acc + string + " ", "");
};
testList = ['this', 'is', 'so', 'fun'];
console.log(concatenateStringsWithSpaces(testList));

const squaresAndSubtracts = list => {
  return list
    .map( num => num*num )
    .reduce( (accumulator, num) => accumulator-num );
};
testList = [10, 5, 4, 2, 1];
console.log(squaresAndSubtracts(testList)); //54

const myReduce = (list, fn, seed) => {
  let answer = seed;
  for (let i = 0; i < list.length; i++) {
    answer = fn(answer, list[i]);
  }
  return answer;
};

//Filter
const filterOutOdds = nums => nums.filter( num => num % 2 === 0);
let list = [1,5,7,2,6,3,5,4,10,50,51];
console.log(filterOutOdds(list));

const filterState = (list, state) => list.filter( person => person.state === state );

const showOutOfCADevs = list => {
  return list
    .filter( person => person.state !== 'CA')
    .map( person => person.name.toUpperCase() )
    .reduce( (acc, name) => `${acc}, ${name}` );
};

const people = [
   {name: 'Brian Holt', state: 'CA'},
   {name: 'Ryan Florence', state: 'WA'},
   {name: 'Kent Dodds', state: 'UT'},
   {name: 'Kyle Simpson', state: 'TX'},
   {name: 'Pete Hunt', state: 'CA'},
   {name: 'Jafar Husain', state: 'CA'},
   {name: 'Yehuda Katz', state: 'OR'},
   {name: 'Matt Zabriskie', state: 'UT'},
   {name: 'Marshall Upshur', state: 'CA'}
 ];
console.log('filterState: ', showOutOfCADevs(people));


const myFilter = (list, fn) => {
  const answer = [];
  for (let i = 0; i < list.length; i++) {
    if (fn(list[i])) {
      answer.push(list[i]);
    }
  }
  return answer;
};
