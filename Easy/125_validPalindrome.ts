/**
 * 2 Pointer | Midde Convergence
 * Time O(N) | Space O(n)
 * https://leetcode.com/problems/valid-palindrome/
 * @param {string} s
 * @return {boolean}
 * To reduce the space complexity of the isPalindrome function to O(1), you need to avoid creating additional data structures that grow with the input size. In your current implementation, the space complexity is O(n) mainly due to the creation of a new string trimed, which holds the cleaned version of the input string.
 * Here's how you can modify your function to achieve O(1) space complexity:
 * 1. Directly Compare Characters in the Original String: Instead of creating a new string, you can compare characters directly in the original string by skipping non-alphanumeric characters and handling case-insensitivity.
 * 2. Use Two Pointers: Similar to your current approach, use two pointers to compare characters from both ends of the string, moving towards the center.
 */

function isPalindrome(s: string): boolean {
  const trimed = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let i = 0;
  let j = trimed.length - 1;

  while (i < j) {
    if (trimed[i] != trimed[j]) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}
