/**
 * Sort - HeapSort Space O(1) | QuickSort Space O(log(N))
 * Time O(N * logN) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  let sArr = s.split("");
  let tArr = t.split("");

  return sArr.sort().toString() === tArr.sort().toString();
}

/**
 * Time O(N) | Space O(N)
 * https://leetcode.com/problems/valid-anagram/
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

function isAnagram2(s: string, t: string): boolean {
  const hashTable = {}; //store each letter's occurance
  if (s.length !== t.length) return false;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    hashTable[char] = (hashTable[char] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];
    if (!hashTable[char]) {
      return false;
    }
    hashTable[char]--;
  }
  return true;
}
