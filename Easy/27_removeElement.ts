/**
 * Time O(N) | Space O(1)
 * https://leetcode.com/problems/remove-element/
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

function removeElement(nums: number[], val: number): number {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
}
