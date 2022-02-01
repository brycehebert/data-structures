const countConstruct = (targetString: string, wordBank: string[], memo: object = {}): number => {
  //base cases
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return 1;

  let totalCount = 0;

  // recursive case
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const numWays = countConstruct(targetString.slice(word.length), wordBank, memo);
      totalCount += numWays;
    }
  }
  memo[targetString] = totalCount;
  return totalCount;
}

console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));