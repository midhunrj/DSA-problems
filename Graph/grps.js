class GraphList {
    constructor() {
        this.adjList = {};
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) {
            this.adjList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        if (this.adjList[v1] && this.adjList[v2]) {
            this.adjList[v1].push(v2);
            this.adjList[v2].push(v1); // for undirected graph
        }
    }

    removeEdge(v1, v2) {
        if (this.adjList[v1]) {
            this.adjList[v1] = this.adjList[v1].filter(v => v !== v2);
        }
        if (this.adjList[v2]) {
            this.adjList[v2] = this.adjList[v2].filter(v => v !== v1); // for undirected graph
        }
    }

    removeVertex(vertex) {
        if (!this.adjList[vertex]) {
            return;
        }

        // First, remove all edges connected to the vertex
        while (this.adjList[vertex].length) {
            const adjacentVertex = this.adjList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        // Then, delete the vertex itself
        delete this.adjList[vertex];
    }

    display() {
        console.log(this.adjList);
        for(let vertex in this.adjList)
        {
            console.log(vertex,"--->",this.adjList[vertex].join(','));
        }
    }
}

let graphList = new GraphList();
graphList.addVertex(0);
graphList.addVertex(1);
graphList.addVertex(2);
graphList.addEdge(0, 1);
graphList.addEdge(1, 2);
graphList.display();
graphList.addVertex(3);
graphList.addEdge(0, 3);
graphList.display();
graphList.removeEdge(0, 1);
graphList.display();
graphList.removeVertex(1);
graphList.display();
