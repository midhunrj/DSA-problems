class Graph{
    constructor(){
        this.adjcencyList= {}
    }

    addVertex(vertex){
        if(!this.adjcencyList[vertex]){
            this.adjcencyList[vertex]=[]
        }
    }

    addEdges(vertex1,vertex2){
        this.adjcencyList[vertex1].push(vertex2)
        this.adjcencyList[vertex2].push(vertex1)
    }

    bfs(start){
        const result=[]
        const visited={}
        const queue=[start]
        visited[start]=true

        while(queue.length){
            const currentVertex= queue.shift()
            result.push(currentVertex)
            this.adjcencyList[currentVertex].forEach((neighbor)=>{
                if(!visited[neighbor]){
                    visited[neighbor]=true
                    queue.push(neighbor)
                }
            })
        }
        return result

    }
}

const graph= new Graph()
graph.addVertex('a')
graph.addVertex('b')
graph.addVertex('c')
graph.addVertex('d')
graph.addEdges('a','b')
graph.addEdges('a','b')
graph.addEdges('b','c')
graph.addEdges('b','d')
console.log(graph.bfs('a'))