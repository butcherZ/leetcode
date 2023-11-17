function twoSum(nums: number[], target: number): number[] {
  const hashMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    const difference = target - currentNumber;

    if (hashMap.has(difference)) return [hashMap.get(difference), i];

    hashMap.set(currentNumber, i); // stores number's value as Key, and its index as value in the hashmap
  }

  return [];
}
