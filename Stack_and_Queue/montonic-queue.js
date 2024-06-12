class Montonicqueue{
    constructor()
    {
        this.items=[]
    }
    enqueue(value)
    {
        while(this.items.length>0&&this.items[this.items.length-1]>value)
        {
            this.items.pop()
        }
        this.items.push(value)
    }
    dequeue()
    {
        return this.items.shift()
    }
    display()
    {
        for(let i=0;i<this.items.length;i++)
        {
            console.log(i,"i-",this.items[i],"value");
        }

    }
}
const monoq=new Montonicqueue()
monoq.enqueue(3)
monoq.enqueue(2)
monoq.enqueue(4)
monoq.display()
console.log("there is deletion happneing", monoq.dequeue())
monoq.enqueue(1)
monoq.display()

