export function unweightedSearch(nodes, start, target, visited, grid, algoName){
    if(!start || !target || start === target)
        return false;
    let structure = [nodes[start]];
    let visited = {start: true};
    while(structure.length){
        let node = algoName === "bfs" ? structure.shift() : structure.pop();
        visited.push(node);
        if(algoName === "dfs") visited[node.id] = true;
        node.status = "visited";
        if(node.id === target){
            return visited;
        }
        let neighbors = getNeighbors(node.id, nodes, grid, algoName);
        neighbors.forEach(neighbor => {
           if(!visited[neighbor]){
               if(algoName === "bfs") visited[neighbor] = true;
               nodes[neighbor].previousNode = node.id;
               structure.push(nodes[neighbor]);
           } 
        });
    }
    return false;
}

function getNeighbors(id, nodes, grid, algoName){
    let coords = id.split("-");
    let x = parseInt(coords[0]);
    let y = parseInt(coords[1]);
    let neighbors = [];
    let neighbor;
    if(grid[x-1] && grid[x-1][y]){
        neighbor = `${(x - 1).toString()}-${y.toString()}`;
        if(nodes[neighbor].status !== "wall"){
            if(algoName === "bfs"){
                neighbors.push(neighbor);
            }else{
                neighbors.unshift(neighbor);
            }
        }
    }
}
