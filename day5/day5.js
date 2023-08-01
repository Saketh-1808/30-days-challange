function spotlightMap(grid) {
  const rows = grid.length;
  const cols = grid[0].length;
  const resultGrid = [];

  // Define the deltas for the neighboring cells (including diagonals)
  const deltas = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (let i = 0; i < rows; i++) {
    const newRow = [];
    for (let j = 0; j < cols; j++) {
      let sum = grid[i][j];

      // Calculate the sum of adjacent cells
      for (const [dx, dy] of deltas) {
        const x = i + dx;
        const y = j + dy;
        if (x >= 0 && x < rows && y >= 0 && y < cols) {
          sum += grid[x][y];
        }
      }

      newRow.push(sum);
    }
    resultGrid.push(newRow);
  }

  return resultGrid;
}

// Test cases
console.log(spotlightMap([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]));
// Output:
// [
//   [12, 21, 16],
//   [27, 45, 33],
//   [24, 39, 28]
// ]

console.log(spotlightMap([
  [2, 6, 1, 3, 7],
  [8, 5, 9, 4, 0]
]));
// Output:
// [
//   [21, 31, 28, 24, 14],
//   [21, 31, 28, 24, 14]
// ]

console.log(spotlightMap([[3]]));
// Output: [[3]]
