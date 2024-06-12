class stack{
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
        return this.items.pop()
    }
    isEmpty()
    {
        return this.items.length===0
    }
    peek()
    {
        if(this.isEmpty())
        {
            console.log("stack is empty");
            return null
        }
        return this.items[0]
    }
    duplicate()
    {
        const seen=new Set()
        const uniquestack=new stack()
        while(!this.isEmpty())
        {
            const currentelement=this.pop()
            if(!seen.has(currentelement))
            {
                seen.add(currentelement)
                uniquestack.push(currentelement)
            }
        }
        return uniquestack
    }

   
}
const stq=new stack()
let total="MadaM"
for(let i=0;i<total.length;i++)
{
    stq.push(total[i])
}
console.log("removing duplicates", stq.duplicate(stq))
console.log("finding middleelement",stq.middleelement())