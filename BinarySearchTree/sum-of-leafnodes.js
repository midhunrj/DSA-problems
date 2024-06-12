class Treenode{
    constructor(value=0,left=null,right=null)
    {
        this.value=value
        this.left=left
        this.right=right
    }
}

function arraytotree(arr)
{
    if(arr.length==0)
    {
        return null
    }

    let root=new Treenode(arr[0])

    let queue=[root]

    let i=1
    while(i<arr.length)
    {
        let node=queue.shift()

        if(i<arr.length&&arr[i]!=null)
        {
            node.left=new Treenode(arr[i])
            queue.push(node.left)
        }
        i++

        if(i<arr.length&&arr[i]!=null)
        {
            node.right=new Treenode(arr[i])
            queue.push(node.right)
        }
        i++
    }
    return root

}

function deepestleaves(root)
{
    if(!root)
    {
        return 0
    }

    let queue=[root]
    let levelsum=0
    while(queue.length>0)
    {
        levelsum=0
        let levelsize=queue.length
        for(let i=0;i<levelsize;i++)
        {
            let node=queue.shift()

            levelsum +=node.value
            if(node.left)
            {
                queue.push(node.left)
            }
            if(node.right)
            {
                queue.push(node.right)
            }
        }
    }
    return levelsum

}

let ar1=[10,23,17,2,3,49,37,58]
let ar2=[7,23,245,null,45,7,null,18,null,17]

let root=arraytotree(ar2)
console.log("root ",root.left,root.right,"\n sum of deepest leaves",deepestleaves(root));