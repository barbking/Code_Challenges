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
