const bestSum = (targetSum: number, numbers: number[], memo: object = {}): number[] | null => {
  // base cases
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  // keep track of the smallest array
  let shortest = null;
  
  // recursive case
  for (let num of numbers) {
    const remainder = targetSum - num;
    const remainderCombination = bestSum(remainder, numbers, memo);
    if (remainderCombination !== null) {
      const combination = [...remainderCombination, num];
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }
  
  memo[targetSum] = shortest;
  return shortest;
}

console.log(bestSum(7, [5, 3, 4, 7]));
console.log(bestSum(100, [1, 2, 5, 25]));
