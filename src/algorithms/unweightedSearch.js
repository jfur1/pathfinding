export function unweightedSearch(nodes, start, target, explored, grid, algoName){
    if(!start || !target || start === target)
        return false;
    let structure = [nodes[start.id]];
    let visited = {start: true};
    while(structure.length){
        let node = algoName === "bfs" ? structure.shift() : structure.pop();
        explored.push(node);
        
        if(algoName === "dfs"){
            visited[node.id] = true;
        }
        node.isVisited = true;
        node.status = "visited";

        if(node.id === target.id){
            return explored;
        }
        let neighbors = getNeighbors(node.id, nodes, grid, algoName);
        neighbors.forEach(neighbor => {
           if(!visited[neighbor]){
               if(algoName === "bfs"){
                   visited[neighbor] = true;
                   console.log("BFS Visited:", visited);
               }
               nodes[neighbor].previousNode = node;
               structure.push(nodes[neighbor]);
           } 
        });
        //updateNeighborsUnweighted(node, nodes, grid, visited, algoName);
    }
    return false;
}

// function updateNeighborsUnweighted(node, nodes, grid, visited, algoName){
//     const neighbors = getNeighbors(node.id, nodes, grid, algoName);
//     for(const neighbor of neighbors){
//         neighbor.previousNode = node;
//         if(!visited[neighbor]){
//             if(algoName === "bfs"){
//                 node.isVisited;
//             }
//             nodes[neigh]
//         }
//     }
// }

function getNeighbors(id, nodes, grid, algoName){
    let coords = id.split("-");
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    let neighbors = [];
    let neighbor;
    if(grid[x-1] && grid[x-1][y]){
        neighbor = `${(x - 1).toString()}-${y.toString()}`;
        if(!nodes[neighbor].isWall){
            if(algoName === "bfs"){
                neighbors.push(neighbor);
            }else{
                neighbors.unshift(neighbor);
            }
        }
    }
    if(grid[x][y+1]){
        neighbor = `${x.toString()}-${(y + 1).toString()}`;
        if(!nodes[neighbor].isWall){
            if(algoName === "bfs"){
                neighbors.push(neighbor);
            }else{
                neighbors.unshift(neighbor);
            }
        }
    }
    if(grid[x+1] && grid[x+1][y]){
        neighbor = `${(x + 1).toString()}-${y.toString()}`;
        if(!nodes[neighbor].isWall){
            if(algoName === "bfs"){
                neighbors.push(neighbor);
            }else{
                neighbors.unshift(neighbor);
            }
        }
    }
    if(grid[x][y-1]){
        neighbor = `${x.toString()}-${(y - 1).toString()}`;
        if(!nodes[neighbor].isWall){
            if(algoName === "bfs"){
                neighbors.push(neighbor);
            }else{
                neighbors.unshift(neighbor);
            }
        }
    }
    return neighbors;
}
