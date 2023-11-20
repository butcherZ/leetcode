/**
 * Hash Set
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/contains-duplicate/
 * @param {number[]} nums
 * @return {boolean}
 */

function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>(nums);
  return set.size !== nums.length;
}
