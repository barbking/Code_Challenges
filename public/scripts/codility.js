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
  if (K === 0 || A.length === 0) {
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
