console.log("Graph");

class Graph{
  constructor()
  {
    this.adjacencylist={}
  }
  
  addvertex(vertex)
  {
    if(!this.adjacencylist[vertex])
    {
      this.adjacencylist[vertex]=[]
    }
  }
  
  addEdge(vertex1,vertex2)
  {
    if(!this.adjacencylist[vertex1])
    {
      this.addvertex(vertex1)
    }
    if(!this.adjacencylist[vertex2])
    {
      this.addvertex(vertex2)
    }
    this.adjacencylist[vertex1].push(vertex2)
    this.adjacencylist[vertex2].push(vertex1)
  }
  display()
  {
    for(let vertex in this.adjacencylist)
    {
      console.log(vertex,"--->",this.adjacencylist[vertex])
    }
  }
  bfstraversal(start)
  {
    const visited={}
    const queue=[start]
    const result=[]
    
    visited[start]=true
    while(queue.length)
    {
      let vertex=queue.shift()
      result.push(vertex)
      
      this.adjacencylist[vertex].forEach(neighbor=>{
        if(!visited[neighbor])
        {
          visited[neighbor]=true
          queue.push(neighbor)
        }
      })
    }
    
    return result
  }
  
  dfstraversal(start)
  {
    const stack=[start]
    const visited={}
    const result=[]
    
    visited[start]=true
    while(stack.length)
    {
      let vertex=stack.pop()
      result.push(vertex)
      this.adjacencylist[vertex].forEach(neighbor=>{
        if(!visited[neighbor])
        {
          visited[neighbor]=true
          stack.push(neighbor)
        }
      })
    }
    return result
    
  }
}

const grp=new Graph()
// grp.addvertex(7)
// grp.addvertex(18)
// grp.addvertex(10)
// grp.addvertex(48)
// grp.addvertex(8)
// grp.addvertex(17)
// grp.addvertex(45)


grp.addEdge(7,18)
grp.addEdge(18,10)
grp.addEdge(10,8)
grp.addEdge(48,7)
grp.addEdge(8,18)
grp.addEdge(17,10)
grp.addEdge(18,45)
 grp.display()
 console.log("bfs traversal",grp.bfstraversal(7))
console.log("dfs traversal",grp.dfstraversal(7))

console.log("Graph");

class Graph{
  constructor()
  {
    this.adjacencylist={}
  }
  
  addvertex(vertex)
  {
    if(!this.adjacencylist[vertex])
    {
      this.adjacencylist[vertex]=[]
    }
  }
  
  addEdge(vertex1,vertex2)
  {
    if(!this.adjacencylist[vertex1])
    {
      this.addvertex(vertex1)
    }
    if(!this.adjacencylist[vertex2])
    {
      this.addvertex(vertex2)
    }
    this.adjacencylist[vertex1].push(vertex2)
    this.adjacencylist[vertex2].push(vertex1)
  }
  display()
  {
    for(let vertex in this.adjacencylist)
    {
      console.log(vertex,"--->",this.adjacencylist[vertex])
    }
  }
  bfstraversal(start)
  {
    const visited={}
    const queue=[start]
    const result=[]
    
    visited[start]=true
    while(queue.length)
    {
      let vertex=queue.shift()
      result.push(vertex)
      
      this.adjacencylist[vertex].forEach(neighbor=>{
        if(!visited[neighbor])
        {
          visited[neighbor]=true
          queue.push(neighbor)
        }
      })
    }
    
    return result
  }
  
  dfstraversal(start)
  {
    const stack=[start]
    const visited={}
    const result=[]
    
    visited[start]=true
    while(stack.length)
    {
      let vertex=stack.pop()
      result.push(vertex)
      this.adjacencylist[vertex].forEach(neighbor=>{
        if(!visited[neighbor])
        {
          visited[neighbor]=true
          stack.push(neighbor)
        }
      })
    }
    return result
    
  }
}

const grp=new Graph()
grp.addEdge(7,9)
grp.addEdge(18,17)
grp.addEdge(10,8)
grp.addEdge(48,7)
grp.addEdge(8,18)
grp.addEdge(17,10)
grp.addEdge(18,45)
grp.display()
console.log("bfs traversal",grp.bfstraversal(7))
console.log("dfs traversal",grp.dfstraversal(7))