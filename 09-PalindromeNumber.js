/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  else if (x < 10) {
    return true;
  }
    let reverse = 0;
    const temp = x;
    while(x > 0) {
      const num = x % 10;
      reverse = reverse * 10 + num;
      x = Math.floor(x/10);
      // console.log("rev", reverse);
    }
    if (reverse === temp) {
      return true
    }
    return false;
};

console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false