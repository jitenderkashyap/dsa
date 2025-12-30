export default class Graph {

    bfs(graph, start) {
        let visited = new Set();
        let queue = [];

        visited.add(start);
        queue.push(start);

        while (queue.length > 0) {
            let node = queue.shift();
            console.log(node);
            for (let edge of graph[node]) {
                if (!visited.has(edge)) {
                    queue.push(edge);
                    visited.add(edge);
                }
            }
        }
    }

    dfs(graph,start,visited=new Set()){
        visited.add(start);
        console.log(start);

        for(let edge of graph[start]){
            if(!visited.has(edge)){
                this.dfs(graph,edge,visited)
            }
        }
        
    }
}