export function dfs(grid, start, goal){
    const visited = [];
    let stack = [start];
    while(stack.length){
        const node = stack.pop();
        if(node.id === goal.id) return visited;

        if(!node.isWall && (node.isStart || !node.isVisited)){
            node.isVisited = true;
            visited.push(node);
            const {col, row} = node;
            let nextNode;
            if(row > 0){
                nextNode = grid[row-1][col];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
            if(row < grid.length - 1){
                nextNode = grid[row+1][col];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
            if(col > 0){
                nextNode = grid[row][col-1];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
            if(col < grid[0].length-1){
                nextNode = grid[row][col+1];
                if(!nextNode.isVisited){
                    nextNode.previousNode = node;
                    stack.push(nextNode);
                }
            }
        }
    }
    return visited;
}