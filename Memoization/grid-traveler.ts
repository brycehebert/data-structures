const gridTraveler = (m, n, memo = {}) => {
  const key = `${m},${n}`;
  // base cases
  // are the args in the memo?
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  // recursive case
  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  console.log(memo)
  return memo[key];
};

console.log(gridTraveler(5, 6))
