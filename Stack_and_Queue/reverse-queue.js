class ReverseQueue
{
    constructor()
    {
        this.items=[]
    }
    enqueue(value)
    {
        this.items.push(value)

    }
    dequeue()
    {
        return this.items.shift()
    }
    display()
    {
        let total=''
        let len =this.items.length
        for(let i=0;i<len;i++)
        {
           console.log(i,this.items[i]);
        }
    }
    reverse()
    {
        let reversestring=''
        for(let i=0;i<this.items.length;i++)
        {console.log('dc',i,this.items[i])
            console.log('kdjsjsb',this.items.length)
            reversestring=this.dequeue()+reversestring
            i--
        }
        return reversestring
    }
}
const arQ=new ReverseQueue()
let total='mMalayalaM'
for(let i=0;i<total.length;i++)
{
    arQ.enqueue(total[i])
}
arQ.display()
console.log("dequeued values",arQ.dequeue())
arQ.display()
console.log("reverse values",arQ.reverse())
arQ.display()
