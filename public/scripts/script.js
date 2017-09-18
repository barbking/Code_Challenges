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

//function to find firs duplicate
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



function findNumber(arr, k) {
    for (i=0; i<arr.length; i++) {
        if (arr[i] == k){
            return 'YES';
        }
    }
    return 'NO';
}
console.log(findNumber([1,2,3],1));


function oddNumbers(l, r) {
  var start, end;
  result = [];
  if (l % 2 !== 0) {
    start = l;
  } else {
    start = l + 1;
  }
  console.log(start);
  if (r % 2 !== 0) {
    end = r;
  } else {
    end = r - 1;
  }
  console.log(end);
  j = start;
  while (j <= end){
    result.push(j);
    j++;
  }
  console.log(result);
  return result;
}

oddNumbers(2,9);

// var x = 100
//   function test() {
//     if(false) {
//       var x = 199;
//     }
//     console.log(x);
//   }
//   test();

function alternatingMerge(array1, array2)
//this function will merge two different arrays in an alternating fashion
//i.e = array1[0], array2[0], array1[1], array2[1], array1[2], array2[2], ... , etc
{
    var mergedArray;
    var i; // while loop counter
    var j; //
    var k; //
    var arrayLengths;

    arrayLengths = array1.length + array2.length;
    i = 0; //
    j = 0; // ARRAY1 COUNTER
    k = 0; // ARRAY2 COUNTER
    mergedArray = new Array(arrayLengths);
    //window.alert(mergedArray);

    while (i < arrayLengths)
    {
        if (i%2 === 0)
        {
            mergedArray[i] = array2[j];
            j = j + 1;
        }
        else
        {
            mergedArray[i] = array1[k];
            k = k + 1;
        }
        i = i + 1;
    }

    var results = mergedArray.join("");
    console.log(results);
    return results;
}
alternatingMerge(['a','a'],['b','b']);

function mergeAlternating(array1, array2) {
    var mergedArray = [];

    for (var i = 0, len = Math.max(array1.length, array2.length); i < len; i++) {
        if (i < array1.length) {
            mergedArray.push(array1[i]);
        }
        if (i < array2.length) {
            mergedArray.push(array2[i]);
        }
    }
    var results = mergedArray.join("");
    console.log(results);
    return results;
}

mergeAlternating(['a','a'],['b','b','c']);
