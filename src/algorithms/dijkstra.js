// Dijkstra's Algorithm:
//  - Inputs:
//      - 2D Grid Matrix
//      - Start Node
//      - Goal Node
//  - Output:
//      - List of nodes representing the shortest possible path, if one exists.

export function dijkstra(grid, start, goal) {
    const visited = [];
    start.g = 0;
    const frontier = getNodes(grid);
    while (!!frontier.length) {
      sortNodes(frontier);
      // Guarenteed to be next closest node since we've just sorted the unvisited nodes by distance
      const node = frontier.shift();
      
      // Skip checks for any walls
      if (node.isWall) continue;
      // If the closest node is infinite distance, then no path exists to our goal
      if (node.g === Infinity) return visited;

      node.isVisited = true;
      visited.push(node);
      if (node === goal) return visited;
      updateNeighborCosts(node, grid);
    }
  }
  
  // Sort the nodes by distance
  function sortNodes(frontier) {
    frontier.sort((nodeA, nodeB) => nodeA.g - nodeB.g);
  }
  
  function updateNeighborCosts(node, grid) {
    const unvisitedNeighbors = getNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.g = node.g + 1;
      neighbor.previousNode = node;
    }
  }
  
  function getNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
  }
  
  function getNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        nodes.push(node);
      }
    }
    return nodes;
  }
  
  // Backtracks from the goal to find the shortest path.

  export function getPath(goal) {
    const path = [];
    let tmpNode = goal;
    while (tmpNode !== null) {
      path.unshift(tmpNode);
      tmpNode = tmpNode.previousNode;
    }
    return path;
  }