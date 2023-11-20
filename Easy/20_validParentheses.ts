/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-parentheses/
 * @param {string} s
 * @return {boolean}
 */

function isValid(s: string): boolean {
  const hMap = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  let stack: string[] = [];
  if (s.length % 2 !== 0) return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else {
      // else when encountering closing brackets
      if (stack[stack.length - 1] === hMap[s[i]]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  if (stack.length > 0) return false;
  return true;
}
