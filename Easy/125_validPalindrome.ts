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
