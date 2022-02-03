const gridTraveler = (m: number, n: number): number => {
  if (m <= 0 || n <= 0) return 0;

  const table: number[][] = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));
  table[1][1] = 1;

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (j + 1 <= n) table[i][j + 1] += current;
      if (i + 1 <= m) table[i + 1][j] += current;
    }
  }

  return table[m][n];
};

console.log(gridTraveler(18, 18));

export {}; // Just making TypeScript not worry about redeclaration