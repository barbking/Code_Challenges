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




// Write a function: function solution(N); that, given a positive integer N,
//  returns the length of its longest binary gap.
//   The function should return 0 if N doesn't contain a binary gap.

function solution(N) {
    // write your code in JavaScript (Node.js 6.4.0)
    var binary = N.toString(2);
    console.log('N to binary -->',binary);
    var biArray = Array.from(binary.toString()).map(Number);
    console.log ('binary array-->',biArray);
    var zeroCount = 0;
    var nonZeroCount = 0;
    var maxCount = 0;
    var maxCountArray = [];
    for (i=0; i<biArray.length; i++) {
          if (biArray[i] === 0) {
                zeroCount ++;
                console.log('zeroCount in loop',zeroCount);
            } else {
              maxCount = zeroCount;
              console.log('maxCount-->',maxCount);
              maxCountArray.push(maxCount);
              console.log('maxCountArray-->',maxCountArray);
              zeroCount = 0;
            }
        }
    maxCountArray.sort();
    length = (maxCountArray.length)-1;
      if ( maxCountArray[length] === 0) {
        console.log('in 0 return');
          return 0;
      } else {
        console.log('in max array val',maxCountArray[length]);
          return maxCountArray[length];
      }
}
solution(9);
