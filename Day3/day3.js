function getObject(inputObj) {
    const uniqueMarks = {}; 
    const resultObj = {};   
  
    for (const [key, entry] of Object.entries(inputObj)) {
      const { age, marks } = entry;
  
      if (!(marks in uniqueMarks) || uniqueMarks[marks].age > age) {
        uniqueMarks[marks] = { key, age, ...entry };
      }
    }
  
    for (const [key, entry] of Object.entries(uniqueMarks)) {
      resultObj[entry.key] = entry;
      delete resultObj[entry.key].key; 
    }
  
    return resultObj;
  }
  
  
  const result1 = getObject({
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
  });
  console.log(result1);
 
  const result2 = getObject({
    0: {age: 18, name: 'john', marks: '400'},
    1: {age: 17, name: 'julie', marks: '400'},
    2: {age: 16, name: 'Robin', marks: '200'},
    3: {age: 16, name: 'Bella', marks: '300'},
    4: {age: 16, name: 'john', marks: '250'},
    5: {age: 15, name: 'julie', marks: '250'}
  });
  console.log(result2);
