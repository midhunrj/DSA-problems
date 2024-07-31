class Node{
    constructor(value)
    {
        this.value=value
        this.left=null
        this.right=null
    }
}
class Binarysearchtree{
    constructor()
    {
        this.root=null
    }
    isEmpty()
    {
        return this.root==null
    }
    
 insert(value)
    {
        const newnode=new Node(value)
        if(this.isEmpty())
        {
            this.root=newnode
        }
        else{
            this.insertnode(this.root,newnode)
        }
    }
 insertnode(root,newnode)
    {
        if(newnode.value<root.value)
        {
            if(root.left==null)
            {
                root.left=newnode
            }
            else{
                this.insertnode(root.left,newnode)
            }
        }
        else
        {
            if(root.right==null)
            {
                root.right=newnode
            }
            else
            {
                this.insertnode(root.right,newnode)
            }
        }
    }
search(root,value)
    {
        if(!root)
        {
            return false
        }
        else{
            if(root.value==value)
            {
                return true
            }
            else if(value<root.value)
            {
                return this.search(root.left,value)
            }
            else{
                return this.search(root.right,value)
            }
        }
    }
    min(root)
    {
        if(!root.left)
        {
            return root.value
        }
        else
        {
            return this.min(root.left)
        }
    }
 max(root)
    {
        if(!root.right)
        {
            return root.value
        }
        else{
            return this.max(root.right)
        }
    }
 delete(value)
    {
        this.root=this.deletenode(this.root,value)
    }
    deletenode(root,value)
    {
        if(root==null)
        {
            return root
        }
        if(value<root.value)
        {
            root.left=this.deletenode(root.left,value)
        }
        else if(value>root.value)
        {
            root.right=this.deletenode(root.right,value)
        }
        else{
            if(!root.left&&!root.right)
            {
                return null
            }
            if(!root.left)
            {
                return root.right
            }
            else if(!root.right)
            {
                return root.left
            }

            root.value=this.min(root.right)
            root.right=this.deletenode(root.right.root.value)
        }
        return root
    }

 display(root, space = 0, level = 0) {
        if (root === null) {
            return;
        }

        space += 5;

        this.display(root.right, space);

        console.log();
        for (let i = 5; i < space; i++) {
            process.stdout.write(' ');
        }
        console.log(root.value);

        this.display(root.left, space);
    }
    preorder(root)
    {
        if(root)
        {
            console.log(root.value);
            this.preorder(root.left)
            this.preorder(root.right)
        }
    }

    inorder(root)
    {
        if(root)
        {
            this.inorder(root.left)
            console.log(root.value);
            this.inorder(root.right)
        }
    }

    postorder(root)
    {
        if(root)
        {
            this.postorder(root.left)
            console.log(root.value);
            this.postorder(root.right)
        }
    }

    levelorder()
    {
        const queue=[]
        queue.push(this.root)

        while(queue.length)
        {
            let curr=queue.shift()
            console.log(curr.value);
            if(curr.left)
            {
                queue.push(curr.left)
            }
            if(curr.right)
            {
                queue.push(curr.right)
            }
        }
    }

}
const bst=new Binarysearchtree()
console.log("is tree empty",bst.isEmpty());
bst.insert(18)
bst.insert(7)
bst.insert(17)
bst.insert(10)
bst.insert(45)
bst.insert(33)
console.log(bst.search(bst.root,18));
console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.display(bst.root));

