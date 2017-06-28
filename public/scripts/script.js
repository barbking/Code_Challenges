console.log('script.js sourced');

//find smallest number in array
function findSmallestNum(arr) {
  var min = arr[0];
  for (i=0; i<arr.length; i++){
    console.log(min, arr[i]);
    if (arr[i] < min){
      min = arr[i];
    }
  }
  console.log(min);
  return min;
}
var array = [34,-345,-1,100,100];
findSmallestNum(array);

//Create a function that returns true if a number is a prime, and false if it is not.
//A prime is a natural number that is only divisible by 1 and itself.
function isPrime(num) {
    for(var i = 2; i < num; i++) {
        if(num % i === 0) {
          console.log(i);
          console.log('false');
            return false;
        }
    }
    console.log(num);
    console.log('true');
    return true;
    // return num > 1;
}
isPrime(17);

// Create a function that returns all values in an array that aren't' odd.
function noOdds(arr) {
  var evens = [];
  for (i=0; i<=arr.length-1; i++){
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }//end if
  }//end for
  console.log(evens);
  return evens;
}
