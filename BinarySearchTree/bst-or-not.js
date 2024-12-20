class Treenode{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}

class binarysearchtree{
    constructor()
    {
        this.root=null
    }

    insert(value)
    {
        const newnode=new Treenode(value)
        if(!this.root)
        {
            this.root=newnode
        }
        else{
            this.insertnode(this.root,newnode)
        }
    }

    insertnode(node,newnode)
    {
        if(newnode.value<node.value)
        { 
            if(node.left==null)
            {
            node.left=newnode
            }
            else
            {
                this.insertnode(node.left,newnode)
            }
        }
        else
        {
            if(node.right==null)
            {
            node.right=newnode
          }
          else 
          {
            this.insertnode(node.right,newnode)
          }
        }
    }

    isBST(node=this.root,max=Infinity,min=-Infinity)
    {
        if(!node)
        {
            return true
        }

        if(node.value<=min||node.value>=max)
        {
            return false
        }

        return this.isBST(node.left,min,node.value)&&this.isBST(node.right,node.value,max)
    }
}


const bst=new binarysearchtree()
bst.insert(10)
bst.insert(5)
bst.insert(20)
bst.insert(3)
bst.insert(7)
bst.insert(15)
bst.insert(30)

console.log(bst,"is this tree a bst?",bst.isBST());

const notbst=new binarysearchtree()
notbst.insert(10)
notbst.insert(5)
notbst.insert(20)
notbst.insert(3)
notbst.insert(7)

console.log(notbst,"is this tree a bst?",notbst.isBST());