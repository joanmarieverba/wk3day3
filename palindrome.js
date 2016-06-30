// Write a function isPalindrome(x)
// that returns true if x is a palindrome,
// otherwise false.
//
// Palindromes are words that are the same
// going forwards and backwards. Examples:
//
// i
// dod
// meeteem
// TrickirT

function reverse(str){
  var origString = str
  .split("");
  var reverseString = "";
  for (var i = 0; i < origString.length; i++) {
    reverseString = origString[i] + reverseString;
  }
  return reverseString;
}

function isPalindrome(str){
  if (str === reverse(str)) {return true;} else {return false;}
}

// tests

console.assert( isPalindrome("tacocat") === true );
console.assert( isPalindrome("Tacocat") === false );
console.assert( isPalindrome("racecar") === true );
console.assert( isPalindrome("cowboy") === false );
