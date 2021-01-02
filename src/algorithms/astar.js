// A* Search Algorithm
//  - Inputs
//      - Adjacency Matrix
//      - Start Node
//      - Goal Node
//  - Output:
//      - Guarenteed shortest possible path
function astar(grid, start, goal){
    if(!start || !goal || start == goal)
        return false;

    grid[start].distance = 0;
    grid[start].totalDistance = 0;
    grid[start].direction = "N";
    let frontier = Object.keys(grid);
    while(frontier.length){
        let node = closestNode(grid, frontier);
    }
}

function closestNode(grid, frontier){
    let node, index;
    for(let i = 0; i < frontier.length; i++){
        if(!node || node.totalDistance > grid[frontier[i]].totalDistance){
            node = grid[frontier[i]];
            index = i;
        }
        else if(node.totalDistance === grid[frontier[i]].totalDistance && node.heuristicDist > grid[frontier[i]].heuristicDist){
            node = grid[frontier[i]];
            index = i; 
        }
    }
}
