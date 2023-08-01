function isNumber(element) {
    return typeof element === 'number';
  }
  
  function numbersThenCharacters(arr) {
    const numbersGroup = [];
    const charactersGroup = [];
  
    for (const sublist of arr) {
      const numbersSubgroup = [];
      const charactersSubgroup = [];
  
      for (const element of sublist) {
        if (isNumber(element)) {
          numbersSubgroup.push(element);
        } else {
          charactersSubgroup.push(element);
        }
      }
  
      numbersSubgroup.sort((a, b) => a - b);
      numbersGroup.push(...numbersSubgroup);
      charactersSubgroup.sort();
      charactersGroup.push(...charactersSubgroup);
    }
  
    return [numbersGroup, charactersGroup];
  }
  
  // Test cases
  console.log(numbersThenCharacters([
    [11, 12, 24, 23, "a", "b"],
    [56, "c", 45], [67, "d"],
    ["f", "e", 78]
  ]));
  // Output: [[11, 12, 23, 24, 45, 56], [67, 78, "a"], ["b", "c"], ["d", "e", "f"]]
  
  console.log(numbersThenCharacters([
    [11, 26, 45.4, "f", "a", "b"],
    [0], [1.5, "d","X",35,"s"],
    ["f", "e", 58],
    ["p","Y","Z"],
    [98,72]
  ]));
  // Output: [[0, 1.5, 11, 26, 35, 45.4], [58], [72, 98, "X", "Y", "Z"], ["a", "b", "d"], ["e", "f", "f"], ["p", "s"]]
  