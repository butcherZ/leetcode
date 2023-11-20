/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/concatenation-of-array/
 * @param {number[]} nums
 * @return {number[]}
 */

function getConcatenation(nums: number[]): number[] {
  return nums.concat(...nums);
}
