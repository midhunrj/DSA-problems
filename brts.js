class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}
class Binarysearchtree
{
    constructor()
    {
        this.root=null
    }

    insert(value)
    {
        const newnode=new Node(value)
        
        if(!this.root)
        {
            this.root=newnode
        }
        else
        {
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
            else{
                this.insertnode(node.left,newnode)
            }
        }
        else{
            if(node.right==null)
            {
                node.right=newnode
            }
            else{
                this.insertnode(node.right,newnode)
            }
        }
    }

    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            console.log(root.value)
            this.inorder(root.right)
        }
    }
}

const bst=new Binarysearchtree()
bst.insert(30)
bst.insert(24)
bst.insert(45)
bst.insert(18)
bst.insert(27)
bst.insert(78)
bst.inorder(bst.root)