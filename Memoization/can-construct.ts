const canConstruct = (targetString: string, wordBank: string[], memo: object = {}): boolean => {
  // base cases
  if (targetString in memo) return memo[targetString];
  if (targetString === "") return true;

  // recursive cases
  for (let word of wordBank) {
    if (targetString.indexOf(word) === 0) {
      const suffix = targetString.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[targetString] = true;
        return true;
      }
    }
  }

  memo[targetString] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee"]));
