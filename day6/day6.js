function groupSeats(seatingArrangement, n) {
  let count = 0;

  for (const row of seatingArrangement) {
    let consecutiveEmptySeats = 0;
    for (const seat of row) {
      if (seat === 0) {
        consecutiveEmptySeats++;
        if (consecutiveEmptySeats >= n) {
          count++;
        }
      } else {
        consecutiveEmptySeats = 0;
      }
    }
  }

  return count;
}

// Test cases
console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1],
  [0, 1, 1, 1, 1, 0, 0]
], 2));
// Output: 3

console.log(groupSeats([
  [1, 0, 1, 0, 1, 0, 1],
  [0, 1, 0, 0, 0, 0, 0],
], 4));
// Output: 2
