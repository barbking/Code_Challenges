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


function firstDuplicate(a) {
    for (i=0; i<=a.length; i++) {
      var aVal = a.splice(a[i],1);
          for (j=0;j<=a.length-1;j++) {
            console.log(aVal[0], a[j]);
              if (a[j] === aVal[0]) {
                console.log(a[j]);
                  return a[j];
              }
          }
    }
    return -1;
}
firstDuplicate([2, 3, 3, 1, 5, 2]);

// Create a function that accepts a string and returns true if it's in the format of
// a proper phone number and false if it's not. Assume any integer from 0-9
// (in the appropriate spots) will produce a valid phone number.
// This is what a valid phone number looks like: (123) 456-7890


fib = [0,1];
function findFibVal(num) {
  for (i=2; i<=num;i++) {
    var c = fib[i-1] + fib[i-2];
    console.log(c);
    fib.push(c);
    console.log(fib[num]);
  }
  console.log (fib[num]);
  return fib[num];
}
findFibVal (0);
