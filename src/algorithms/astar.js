// A* Search Algorithm
//  - Allowable Moves: [N, E, S, W]
//  - Inputs
//      - Adjacency Matrix
//      - Start Node
//      - Goal Node
//  - Output:
//      - Guarenteed shortest possible path
// export function astar(nodes, start, goal, explored, grid, heuristic){
//     if(!start || !goal || start === goal)
//         return false;
//     nodes[start.id].g = 0;
//     nodes[start.id].f = 0;
//     nodes[start.id].direction = "N";
//     let frontier = Object.keys(nodes);
//     console.log("frontier:", frontier)
//     while(frontier.length){
//         // Pop the next closest node off the frontier
//         let node = closestNode(nodes, frontier);
//         // Make sure the node is not a wall
//         while(node.status === "wall"  && frontier.length){
//             node = closestNode(nodes, frontier);
//         }
//         if(node.g === Infinity) return false;
//         explored.push(node);
//         node.status = "visited";
//         if(node.id === goal.id) return explored;

//         updateNeighbors(nodes, node, grid, start, goal, heuristic);

//     }
    
// }

// function closestNode(nodes, frontier){
//     let node, index;
//     for(let i = 0; i < frontier.length; i++){
//         if(!node || node.f > nodes[frontier[i]].f){
//             node = nodes[frontier[i]];
//             index = i;
//         }
//         else if(node.f === nodes[frontier[i]].f){
//             if(node.h > nodes[frontier[i]].h){
//                 node = nodes[frontier[i]];
//                 index = i;
//             }
//         }
//     }
//     frontier.splice(index, 1);
//     return node;
// }

// function updateNeighbors(nodes, node, grid, start, target, heuristic){
//     let neighbors = getNeighbors(node.id, nodes, grid);
//     for(let neighbor of neighbors){
//         if(target){
//             // console.log("node:", node);
//             // console.log("neighbor:", neighbor)
//             updateNode(node, nodes[neighbor], nodes[start.id], nodes[target.id], nodes, grid, heuristic);
//         }
//         else{
//             updateNode(node, nodes[neighbor]);
//         }
//     }
// }

// function updateNode(node, tmpTarget, trueStart, trueTarget, nodes, grid, heuristic){
//     let path = getPathCost(node, tmpTarget);
//     // If our new target node has no heuristic => Assign to be manhattan distance
//     if(!tmpTarget.h) tmpTarget.h = manhattanDistance(tmpTarget, trueTarget);
//     let dist = node.g + tmpTarget.weight + path[0];
//     if(dist < tmpTarget.g){
//         tmpTarget.g = dist;
//         tmpTarget.f = tmpTarget.g + tmpTarget.h
//         tmpTarget.previousNode = node;
//         tmpTarget.path = path[1];
//         tmpTarget.direction = path[2];
//     }
// }

// function getNeighbors(id, nodes, grid){
//     let coords = id.split("-");
//     let x = parseInt(coords[0]);
//     let y = parseInt(coords[1]);
//     let neighbors = [];
//     let neighbor;
//     // North
//     if(grid[x-1] && grid[x-1][y]){
//         neighbor = `${(x-1).toString()}-${y.toString()}`;
//         if(nodes[neighbor].status !== "wall") neighbors.push(neighbor);
//     }
//     // South
//     if(grid[x+1] && grid[x+1][y]){
//         neighbor = `${(x+1).toString()}-${y.toString()}`;
//         if(nodes[neighbor].status !== "wall") neighbors.push(neighbor);
//     }
//     if(grid[x][y-1]){
//         neighbor = `${x.toString()}-${(y - 1).toString()}`;
//         if(nodes[neighbor].status !== "wall") neighbors.push(neighbor);
//     }
//     if(grid[x][y+1]){
//         neighbor = `${x.toString()}-${(y + 1).toString()}`;
//         if(nodes[neighbor].status !== "wall") neighbors.push(neighbor);
//     }
//     return neighbors;
// }

// function getPathCost(nodeA, nodeB){
//     let startCoords = nodeA.id.split("-");
//     let targetCoords = nodeB.id.split("-");
//     let nodeAx = parseInt(startCoords[0]);
//     let nodeAy = parseInt(startCoords[1]);
//     let nodeBx = parseInt(targetCoords[0]);
//     let nodeBy = parseInt(targetCoords[1]);
//     // B is above A
//     if(nodeBx < nodeAx && nodeAy === nodeBy){
//         if(nodeA.direction === "N") return [1, ["f"], "N"];
//         else if(nodeA.direction === "E") return [2, ["l", "f"], "N"];
//         else if(nodeA.direction === "W") return [2, ["r", "f"], "N"];
//         else if(nodeA.direction === "S") return [3, ["r", "r", "f"], "N"];
//         else if(nodeA.direction === "NE") return [1.5, null, "N"];
//         else if(nodeA.direction === "SE") return [2.5, null, "N"];
//         else if(nodeA.direction === "NW") return [1.5, null, "N"];
//         else if(nodeA.direction === "SW") return [2.5, null, "N"];
//     }
//     else if(nodeBx > nodeAx && nodeAy === nodeBy){
//         if(nodeA.direction === "N") return [3, ["r", "r", "f"], "S"];
//         else if(nodeA.direction === "E") return [2, ["r", "f"], "S"];
//         else if(nodeA.direction === "W") return [2, ["l", "f"], "S"];
//         else if(nodeA.direction === "S") return [1, ["f"], "S"];
//         else if(nodeA.direction === "NE") return [2.5, null, "S"];
//         else if(nodeA.direction === "SE") return [1.5, null, "S"];
//         else if(nodeA.direction === "NW") return [2.5, null, "S"];
//         else if(nodeA.direction === "SW") return [1.5, null, "S"];
//     }
//     if(nodeBy < nodeAy && nodeAx === nodeBx){
//         if(nodeA.direction === "N") return [2, ["l", "f"], "W"];
//         else if(nodeA.direction === "E") return [3, ["l", "l", "f"], "W"];
//         else if(nodeA.direction === "W") return [1, ["f"], "W"];
//         else if(nodeA.direction === "S") return [2, ["r", "f"], "W"];
//         else if(nodeA.direction === "NE") return [2.5, null, "W"];
//         else if(nodeA.direction === "SE") return [2.5, null, "W"];
//         else if(nodeA.direction === "NW") return [1.5, null, "W"];
//         else if(nodeA.direction === "SW") return [1.5, null, "W"];
//     }
//     else if(nodeBy > nodeAy && nodeAx === nodeBx){
//         if(nodeA.direction === "N") return [2, ["r", "f"], "E"];
//         else if(nodeA.direction === "E") return [1, ["f"], "E"];
//         else if(nodeA.direction === "W") return [3, ["r","r","f"], "E"];
//         else if(nodeA.direction === "S") return [2, ["l", "f"], "E"];
//         else if(nodeA.direction === "NE") return [1.5, null, "E"];
//         else if(nodeA.direction === "SE") return [1.5, null, "E"];
//         else if(nodeA.direction === "NW") return [2.5, null, "E"];
//         else if(nodeA.direction === "SW") return [2.5, null, "E"];
//     }
// }

// function manhattanDistance(nodeA, nodeB){
//     let nodeAcoords = nodeA.id.split("-").map(x => parseInt(x));
//     let nodeBcoords = nodeB.id.split("-").map(x => parseInt(x));
//     let nodeAx = nodeAcoords[0];
//     let nodeBx = nodeBcoords[0];
//     let nodeAy = nodeAcoords[1];
//     let nodeBy = nodeBcoords[1];

//     let delta_x = Math.abs(nodeAx - nodeBx);
//     let delta_y = Math.abs(nodeAy - nodeBy);

//     return (delta_x + delta_y);
// }

export function astar(grid, start, goal){
    const grid = {...grid};
    const visited = [];
    start.distance = 0;
    const frontier = getNodes(grid);

    while(frontier.length){
        sortByDistance(frontier);
        const node = frontier.shift();
        if(!node.isWall){
            if(node.distance === Infinity) return false;
            node.isVisited = true;
            visited.push(node);
            if(node == goal) return visited;
            updateUnvisitedNeighbors(node, grid);
        }
    }
}

function getNodes(grid){
    const nodes = [];
    for(const row of grid){
        for(const node of row){
            nodes.push(node);
        }
    }
    return nodes;
}

function sortByDistance(unvisitedNodes) {
    unvisitedNodes.sort((nodeA, nodeB) => nodeA.distance - nodeB.distance);
}

function updateUnvisitedNeighbors(node, grid) {
    const unvisitedNeighbors = getUnvisitedNeighbors(node, grid);
    for (const neighbor of unvisitedNeighbors) {
      neighbor.distance = node.distance + 1 + neighbor.distanceToFinishNode;
      neighbor.previousNode = node;
    }
}

function getUnvisitedNeighbors(node, grid) {
    const neighbors = [];
    const {col, row} = node;
    if (row > 0) neighbors.push(grid[row - 1][col]);
    if (row < grid.length - 1) neighbors.push(grid[row + 1][col]);
    if (col > 0) neighbors.push(grid[row][col - 1]);
    if (col < grid[0].length - 1) neighbors.push(grid[row][col + 1]);
    return neighbors.filter(neighbor => !neighbor.isVisited);
}

export function getAstarPath(goal) {
    const path = [];
    let tmpNode = goal;
    while (tmpNode !== null) {
      path.unshift(tmpNode);
      tmpNode = tmpNode.previousNode;
    }
    return path;
  }

