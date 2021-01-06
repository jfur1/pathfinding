export function bfs(grid, start, goal){
    const visited = [];
    let stack = [start];
    while(stack.length){
        const node = stack.shift();
        if(node.id === goal.id) return visited;

        if(!node.isWall && (node.id === start.id)){
            node.isVisited = true;
            stack.push(node);
            let nextNode;
            if(node.row > 0){
                nextNode = grid[node.row-1][node.col];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
            if(node.row < grid.length - 1){
                nextNode = grid[node.row+1][node.col];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
            if(node.col > 0){
                nextNode = grid[node.row][node.col-1]
            }
        }
    }

}