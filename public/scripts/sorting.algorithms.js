//bubble sort - least efficient bigO(n^2)
function bubbleSort(nums) {
  do {
    var swapped = false;
    for (let i = 0; i < nums.length; i++){
      if (nums[i] > nums[i+1]) {
        let temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return nums;
}

var nums = [2,8,7,9,12,14,13,1];
console.log('bubbleSort: ',bubbleSort(nums));

//insertion sort - little better, good if array partially sorted
const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) {
        const spliced = nums.splice(i, 1); //take out one element, no longer in orid array
        nums.splice(j, 0, spliced[0]);  //insert something at [j] in array
      }
    }
  }
  return nums;
};

var nums = [2,8,7,9,12,14,13,1];
console.log('insertionSort: ',insertionSort(nums));


//merge sort
// var a = [34, 203, 3, 746, 200, 984, 198, 764, 9];
//
// function mergeSort(arr)
// {
//     if (arr.length < 2)
//         return arr;
//
//     var middle = parseInt(arr.length / 2);
//     var left   = arr.slice(0, middle);
//     var right  = arr.slice(middle, arr.length);
//
//     return merge(mergeSort(left), mergeSort(right));
// }
//
// function merge(left, right)
// {
//     var result = [];
//
//     while (left.length && right.length) {
//         if (left[0] <= right[0]) {
//             result.push(left.shift());
//         } else {
//             result.push(right.shift());
//         }
//     }
//
//     while (left.length)
//         result.push(left.shift());
//
//     while (right.length)
//         result.push(right.shift());
//
//     return result;
// }
//
// console.log("mergeSort: ",mergeSort(a));


//mergeSort
const mergeSort = nums => {
  if (nums.length < 2) {
    return nums;
  }
  const length = nums.length;
  const middle = Math.floor(length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {

  const results = [];

  while (left.length && right.length) {

    if (left[0] <= right[0]) {
      results.push(left.shift());
    }
    else {
      results.push(right.shift());
    }
  }

  while(left.length) {
    results.push(left.shift());
  }
  while(right.length) {
    results.push(right.shift());
  }

  return results;
};

var b = [34, 203, 3, 746, 200, 984, 198, 764, 9];
console.log('mergeSort: ',mergeSort(b));


//Quick sort from http://blog.benoitvallon.com/sorting-algorithms-in-javascript/the-quicksort-algorithm/
// array to sort
var array = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];

// basic implementation (pivot is the first element of the array)
function quicksortBasic(array) {
  if(array.length < 2) {
    return array;
  }

  var pivot = array[0];
  var lesser = [];
  var greater = [];

  for(var i = 1; i < array.length; i++) {
    if(array[i] < pivot) {
      lesser.push(array[i]);
    } else {
      greater.push(array[i]);
    }
  }

  return quicksortBasic(lesser).concat(pivot, quicksortBasic(greater));
}

console.log(quicksortBasic(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// swap function helper
function swap(array, i, j) {
  var temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

// classic implementation (with Hoare partition scheme, you can comment either one method or the other to see the difference)
function quicksort(array, left, right) {
  left = left || 0;
  right = right || array.length - 1;

  // var pivot = partitionLomuto(array, left, right); // you can play with both partition
  var pivot = partitionHoare(array, left, right); // you can play with both partition

  if(left < pivot - 1) {
    quicksort(array, left, pivot - 1);
  }
  if(right > pivot) {
    quicksort(array, pivot, right);
  }
  return array;
}
// Hoare partition scheme, it is more efficient than the Lomuto partition scheme because it does three times fewer swaps on average
function partitionHoare(array, left, right) {
  var pivot = Math.floor((left + right) / 2 );

  while(left <= right) {
    while(array[left] < array[pivot]) {
      left++;
    }
    while(array[right] > array[pivot]) {
      right--;
    }
    if(left <= right) {
      swap(array, left, right);
      left++;
      right--;
    }
  }
  return left;
}

console.log(quicksort(array.slice())); // => [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
