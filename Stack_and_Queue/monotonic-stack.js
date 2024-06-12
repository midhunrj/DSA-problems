class Monotonicstack
{
    constructor()
    {
      this.stack=[]
    }
    push(value)
    {
        while(this.stack.length>0&&this.stack[this.stack.length-1]>value)
        {
            this.stack.pop()
        }
        this.stack.push(value)
    }
    pop()
    {
        return this.stack.pop()
    }
    peek()
    {
        return this.stack[this.stack.length-1]
    }
    display()
    {
        for(let i=0;i<this.stack.length;i++)
        {
            console.log(i,"-i-",this.stack[i],"value");
        }
    }
}
const monStew=new Monotonicstack()
monStew.push(2)
monStew.push(3)
monStew.push(1)
monStew.push(5)
monStew.display()
console.log("there is deletion happening here",monStew.pop())
monStew.display()