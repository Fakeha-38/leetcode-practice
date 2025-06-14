/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]. */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexMap = {}

    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      if (target-num in indexMap) {
        return [indexMap[target-num], i];
      }
      indexMap[num] = i;
    }
};

console.log(twoSum([2,7,11,15], 9)); //[0,1]
console.log(twoSum([3,2,4], 6)); //[1,2]
console.log(twoSum([3,3], 6)); //[0,1]