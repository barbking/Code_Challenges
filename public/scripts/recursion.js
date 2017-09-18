//simple example of recursion function to determine if text is a palindrome
function isPalindrome(text) {
  if (text.length <= 1) return true;
  console.log('char(0)-->',text.charAt(0),text.charAt(text.length - 1));
  if(text.charAt(0) != text.charAt(text.length - 1)) return false;
  return isPalindrome(text.substr(1, text.length - 2));
}

console.log('tacocat isPalindrome:',isPalindrome("tacocat"));
console.log('taco isPalindrome:',isPalindrome("taco"));

//recursion function in an object
var ninja = {
  chirp: function(n) {
    return n > 1 ? this.chirp(n-1) + "-chirp" : "chirp";
  }
};
console.log(ninja.chirp(6));
// assert(chirp(3) =="chirp-chirp-chirp", "calling the named function come naturally.");

//factorial using recursion
function factorial (n) {
  if (n < 2) {
    return 1;
  }
  return n * factorial (n-1);
}

console.log(factorial(10)); //3628800
console.log(factorial(1));

//check if array2 a subset of array1
function checkSubset (array1, array2) {
  for (let i = 0; i < array2.length; i++) {
    if (array1.length < array2.length) {
      return false;
    }
    for (let j = 0; j < array1.length; j++) {
      console.log(array1[i]);
      if (array1[j] !== array2[i]) {
        array1.splice(0,1);
        console.log("array1: ",array1);
        checkSubset(array1, array2);
      } else {
        j++;
      }
    }//end j loop
  }//end i loop
  return true;
}
array1 = [2,5,6,3,4,8];
array2 = [2,3];
console.log(checkSubset(array1, array2));
