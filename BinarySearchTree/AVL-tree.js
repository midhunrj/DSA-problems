class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
        this.height=1
    }
}
class AVLtree{
    constructor()
    {
        this.root=null
    }

    getheight(node)
    {
     return node?node.height:0
    }

    getbalancefactor(node)
    {
        return node?this.getheight(node.left)-this.getheight(node.right):0
    }

    rightrotate(y)
    {
        let x=y.left
        let t2=x.right

        x.right=y
        y.lefy=t2

        y.height=Math.max(this.getheight(y.left),this.getheight(y.right))+1
        x.height=Math.max(this.getheight(x.left),this.getheight(x.right))+1

        return x
    }

    leftrotate(x)
    {
        let y=x.right
        let t2=y.left
        
        y.left=x
        x.right=t2

        x.height=Math.max(this.getheight(x.left),this.getheight(y.right))+1
        y.height=Math.max(this.getheight(y.left),this.getheight(x.right))+1

        return y
    }

    insert(node,value)
    {
        if(!node)
        {
            return new Node(value)
        }

        if(value<node.value)
        {
        node.left=this.insert(node.left,value)
        }
        else if(value>node.value)
        {
            node.right=this.insert(node.right,value)
        }
        else{
            return node
        }

        node.height=1+Math.max(this.getheight(node.left),this.getheight(node.right))

        let balance=this.getbalancefactor(node)

        if(balance>1&&value<node.left.value)
        {
            return this.rightrotate(node)
        }
        if(balance<-1&&value>node.right.value)
        {
            return this.leftrotate(node)
        }
        if(balance<-1&&value<node.right.value)
        {
            node.right=this.rightrotate(node.right)
            return this.leftrotate(node)
        }
        if(balance>1&&value>node.left.value)
        {
            node.left=this.leftrotate(node.left)
            return this.rightrotate(node)
        }

        return node
    }

    insertvalue(value)
    {
        this.root=this.insert(this.root,value)
    }

    preorder(node)
    {
        if(node)
        {
            
            this.preorder(node.left)
            console.log(node.value);
            this.preorder(node.right)
        }
    }
    preordertraversal()
    {
        this.preorder(this.root)
    }

    inordertraversal()
    {
        this.inorder(this.root)
    }
    inorder(root)
    {
        if(root)
        {
            console.log(root.value);
            this.inorder(root.left)
            this.inorder(root.right)
        }
    }

}

let tree=new AVLtree()

tree.insertvalue(25)
tree.insertvalue(32)
tree.insertvalue(33)
tree.insertvalue(45)
tree.insertvalue(65)
tree.insertvalue(53)
tree.insertvalue(79)
console.log("preorder traversal of the avltree");
tree.preordertraversal()
console.log(tree);
tree.inordertraversal()

