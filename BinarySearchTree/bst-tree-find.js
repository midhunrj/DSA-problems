class treenode{
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

    insert(value)
    {
        const newnode=new treenode(value)
        if(this.root===null)
        {
            this.root=newnode
        }
        else{
            this.insertnode(this.root,newnode)
        }
    }
 insertnode(node,newnode)
    {  if(newnode.value<node.value)
        {if(node.left===null)
            {
                node.left=newnode
            }
            else{
                this.insertnode(node.left,newnode)
            } }
        else{
            if(node.right===null)
            {
                node.right=newnode
            }
            else
            {
                this.insertnode(node.right,newnode)
            } } }
 findclosestvalue(target)
    {let closest=this.root.value
        let currentnode=this.root
 while(currentnode!==null)
        { if(Math.abs(target-closest)>Math.abs(target-currentnode.value))
            {
                closest=currentnode.value
            }
 if(target<currentnode.value)
            {
                currentnode=currentnode.left
            }
            else if(target>currentnode.value)
            {
                currentnode=currentnode.right
            }
            else{
                break;
            } }
 return closest
    }
}
const bst=new Binarysearchtree()
bst.insert(15)
bst.insert(7)
bst.insert(18)
bst.insert(45)
bst.insert(27)
bst.insert(79)
bst.insert(7)
bst.insert(33)
bst.insert(1)

const target=8
const closestvalue=bst.findclosestvalue(target)
console.log('the closest value to',target,'is ',closestvalue);
