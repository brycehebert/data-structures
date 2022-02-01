const howSum = (targetSum: number, numbers: number[], memo: object = {}): number[] | null => {
  // base cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  // recursive case
  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      memo[targetSum]  = [...result, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
}

console.log(howSum(7, [2,3]));
console.log(howSum(300, [7, 14]));