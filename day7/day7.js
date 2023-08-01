function join(words) {
  let result = words[0]; 
  let minOverlap = 0; 

  for (let i = 1; i < words.length; i++) {
    const currentWord = words[i];
    let overlap = "";

    for (let j = result.length - 1; j >= 0; j--) {
      if (currentWord.startsWith(result.slice(j))) {
        overlap = result.slice(j);
        break;
      }
    }

    
    result += currentWord.slice(overlap.length);

    if (overlap.length < minOverlap || minOverlap === 0) {
      minOverlap = overlap.length;
    }
  }

  return [result, minOverlap];
}

// Test cases
console.log(join(["oven", "envier", "erase", "serious"]));
console.log(join(["move", "over", "very"])); 
console.log(join(["to", "ops", "psy", "syllable"])); 
console.log(join(["aaa", "bbb", "ccc", "ddd"])); 
