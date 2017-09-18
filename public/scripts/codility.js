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

/* Write a function:
function solution(A);
that, given an array A consisting of N integers fulfilling the above conditions,
returns the value of the unpaired element.
For example, given array A such that:
  A[0] = 9  A[1] = 3  A[2] = 9
  A[3] = 3  A[4] = 9  A[5] = 7
  A[6] = 9
the function should return 7, as explained in the example above.*/

function solution2(A) {
  //match pairs in array, push pairs to new array, when array.length=1 done, return
  //maybe sort array in order first so only have to compare to neighbor
  //do quick review of array methods online to refresh my mind
  A.sort();
  console.log(A);
  var pairArray = [];
  //initial brut force method, run through sorted array and check neighbor index
  for (i=0; i<=A.length-1; i+=2) {
    if (A[i] != A[i+1] || i == A.length) {
      return A[i];
    }

  }// end for loop

}//end of solution func
console.log(solution2([9,3,9,3,9,7,9]));

/*A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
Write a function:
function solution(A, K);
that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times. */
function solution3(A,K) {
  if (K === 0 || A.length === 0 || A.length === 1) {
    return A;
  } else {
    for (i=1; i<=K; i++) {
      rotateOne();
    }
  }
  function rotateOne() {
    //get last val in array to remove
    var lastIndexVal = A[A.length-1];
    var rotatedArray = A.slice(0,A.length-1);
    //add the last val to beg of rotatedArray
    rotatedArray.splice(0,0,lastIndexVal);
    A = rotatedArray;
  }
    return A;
  // rotatedArray.splice(0,0,A[A.length-1]);
  // console.log(rotatedArray);
}
console.log(solution3([3,8,9,7,6],3));

function solution4(A, K) {
    K = K % A.length;
    if (A.length === 0 || A.length === 1 || K === 0) {
        return A;
    }

    let part = A.splice(A.length - K);
    return part.concat(A);
}
console.log(solution4([3,8,9,7,6],3));

// Your goal is to find that missing element.
function solution6(A) {
    var length = A.length;
    var sum = ((length + 1) /2) * (length + 2);
    var sumMinusMissing = 0;
    console.log('sum',sum);
    for (i = 0; i < length; i++) {
        sumMinusMissing += A[i];
        console.log(sumMinusMissing);
    }
    return sum - sumMinusMissing;
}
console.log(solution6([2,3,7,6,5,8,1,]));

/*A small frog wants to get to the other side of the road. The frog is currently located at position X and wants
 to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.
Count the minimal number of jumps that the small frog must perform to reach its target.*/
function solution7(X, Y, D) {
  var travelDist = Y - X;
  var jumps = travelDist/D;
  return Math.ceil(jumps);
}

//TapeEquilibrium
function solution8(A) {
  var sumAfter = sumBefore = 0;
  var minDiff = Number.POSITIVE_INFINITY;

  A.forEach(function(value){
      sumAfter += value;
  });
  console.log('sumAfter',sumAfter);
  for (var i = 1; i < A.length; i++){
      sumBefore += A[i -1];
      console.log('sumBefore',sumBefore);
      sumAfter = sumAfter - A[i -1];
      console.log('sumAfter',sumAfter);
      minDiffTemp = Math.abs(sumBefore - sumAfter);
      if (minDiffTemp < minDiff){
          minDiff = minDiffTemp;
          console.log('minDiff',minDiff);
      }
  }
  return minDiff;
  }
console.log(solution8([3,1,2,4,3]));


function main() {
    var n = 5;
    var k = 0;
    var a = [1, 2 , 3, 4, 5];
    if (k === 0 || a.length === 1) {
        console.log(a.(''));
        return a.join();
    }
}
main();
