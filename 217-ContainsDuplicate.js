/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let setObj = new Set();
  for (let n of nums) {
      if (setObj.has(n)) {
          return true;
      }
      setObj.add(n)
  }
  return false;
};

console.log(containsDuplicate([1,2,3,1])); // true
console.log(containsDuplicate([1,2,3,4])); // false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // true