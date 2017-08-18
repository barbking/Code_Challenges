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
