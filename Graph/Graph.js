// class Graph{
//     constructor()
//     {
//         this.adjacencylist={}
//     }

//     addvertex(vertex)
//     {
//         if(!this.adjacencylist[vertex])
//         {
//             this.adjacencylist[vertex]=[]
//         }
//     }

//     addEdge(vertex1,vertex2)
//     {
//         if(!this.adjacencylist[vertex1])
//         {
//             this.addvertex(vertex1)
//         }
//         if(!this.adjacencylist[vertex2])
//         {
//             this.addvertex(vertex2)
//         }
//         this.adjacencylist[vertex1].push(vertex2)
//         this.adjacencylist[vertex2].push(vertex1)
//     }

//     display()
//     {
//         for(let vertex in this.adjacencylist)
//         {
//             console.log(vertex,'-->',this.adjacencylist[vertex].join(','));
//         }   
    
//     }

//     bfs(start)
//     {
//         const queue=[start];
//         const result=[]
//         const visited=[]

//         visited[start]=true

//         while(queue.length)
//         {
//             const vertex=queue.shift()
//             result.push(vertex)

//             this.adjacencylist[vertex].forEach(neighbor=> {
//                 if(!visited[neighbor])
//                 {
//                     visited[neighbor]=true
//                     queue.push(neighbor)
//                 }
                
//             });
//         }
//         return result

//     }

//     dfstraversal(start)
//     {
//         const stack=[start]
//         const result=[]
//         const visited={}
//         visited[start]=true

//         while(stack.length)
//         {
//             const vertex=stack.pop()
//             result.push(vertex)

//             this.adjacencylist[vertex].forEach(neighbor=>{
//                 if(!visited[neighbor])
//                 {
//                     visited[neighbor]=true
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result
//     }

//     // dfsrecursive(start)
//     // {
//     //     const result=[]
//     //     const visited={}
//     //     const adjacencylist=this.adjacencylist

//     //     (function dfs(vertex)
//     //     {
//     //         if(!vertex)
//     //         {
//     //             return null
//     //         }
//     //         visited[vertex]=true
//     //         result.push(vertex)

//     //         adjacencylist[vertex].forEach(neighbor=>{
//     //             if(!visited[neighbor])
//     //             {
//     //                 return dfs(neighbor)
//     //             }
//     //         })
//     //     })(start)

//     //     return result
//     // }
// }

// const graph=new Graph()
// graph.addvertex('A')
// graph.addvertex('B')
// graph.addvertex('C')
// graph.addvertex('D')
// graph.addvertex('E')

// graph.addEdge('A','B')
// graph.addEdge('A','C')
// graph.addEdge('B','D')
// graph.addEdge('C','E')
// graph.addEdge('D','E')

// graph.display()

// console.log("BFS :",graph.bfs('A'));
// console.log("DFS iterative :",graph.dfstraversal("A"));
// //console.log("DFS recursive :",graph.dfsrecursive('A'));

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1);
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2);
        }
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1); // For undirected graph
    }

    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + " --> " + this.adjacencyList[vertex].join(", "));
        }
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};

        visited[start] = true;

        while (queue.length) {
            const vertex = queue.shift();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

    dfstraversal(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (stack.length) {
            const vertex = stack.pop();
            result.push(vertex);

            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }
        return result;
    }

    dfsRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);

            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor);
                }
            });
        })(start);

        return result;
    }
}

// Example usage:
const graph = new Graph();
graph.addVertex(0);
graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6)

graph.addEdge(0,1);
graph.addEdge(0,3);
graph.addEdge(1,2);
graph.addEdge(1,5);
graph.addEdge(1,3);
graph.addEdge(1,6);
graph.addEdge(2,4);
graph.addEdge(2,5);
graph.addEdge(2,3);
graph.addEdge(2,1);
graph.addEdge(3,0);
graph.addEdge(3,1);
graph.addEdge(4,3);
graph.addEdge(4,2);
graph.addEdge(4,6);
graph.addEdge(6,1);
graph.addEdge(6,4);
graph.addEdge(5,1);
graph.addEdge(5,2);

graph.display();

console.log("BFS:", graph.bfs(0));
console.log("DFS Iterative:", graph.dfstraversal(0));
console.log("DFS Recursive:", graph.dfsRecursive(0));
