/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];

      if (sum === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const numbers = [2, 11, 15, 7];
const target = 9;

twoSum(numbers, target);
