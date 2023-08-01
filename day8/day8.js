function findPath(tickets) {
  
  const graph = {};
  for (const [from, to] of tickets) {
    if (!graph[from]) {
      graph[from] = [];
    }
    graph[from].push(to);
  }

  
  for (const airport in graph) {
    graph[airport].sort();
  }

  const itinerary = [];

  
  function dfs(airport) {
    while (graph[airport] && graph[airport].length > 0) {
      const nextAirport = graph[airport].shift();
      dfs(nextAirport);
    }
    itinerary.push(airport);
  }

  
  dfs("A");

  
  return itinerary.reverse();
}


console.log(findPath([["C", "F"], ["A", "C"], ["I", "Z"], ["F", "I"]]));


console.log(findPath([["A", "C"], ["A", "B"], ["C", "B"], ["B", "A"], ["B", "C"]]));


console.log(findPath([["Y", "L"], ["D", "A"], ["A", "D"], ["R", "Y"], ["A", "R"]]));
