class Graph{
    constructor(){
      this.adjcencyList={}
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
  
    dfs(start){
      const result=[]
      const visited={}
      const stack=[start]
      visited[start]=true
      while(stack.length){
        const currentVertex=stack.pop()
        result.push(currentVertex)
  
        this.adjcencyList[currentVertex].forEach((neighbor)=>{
           if(!visited[neighbor]){
            visited[neighbor]=true
            stack.push(neighbor)
           }
        })
    }
    return result
  }
  }
  const graph=new Graph()
  graph.addVertex('A')
  graph.addVertex('B')
  graph.addVertex('C')
  graph.addVertex('D')
  graph.addEdges('A','B')
  graph.addEdges('A','C')
  graph.addEdges('B','C')
  graph.addEdges('B','D')
  
  
  console.log('graph is '+ graph.dfs('A'))