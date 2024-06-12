class Stack{
    constructor()
    {
        this.items=[]
    }

    push(value)
    {
        this.items.push(value)
    }
    pop()
    {
        if(!this.isempty())
        {
            this.items.pop()
        }
    }
    display()
    {
        console.log('stack',this.items)
    }

    isempty()
    {
        return this.items.length==0
    }
}
const stack=new Stack()

stack.push(2)
stack.push(4)
stack.push(5)
stack.display()
stack.pop()
stack.display()