const allConstruct = (targetString: string, wordBank: string[], memo: object = {}): string[][] | [] => {
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return [[]];

  let result = [];

  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(way => [word, ...way]);
      result.push(...targetWays);
    }
  }

  memo[targetString] = result;
  return result;
}

console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"]));
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));