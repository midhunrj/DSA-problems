function reversestring(n)
{
    if(n.length==0)
    {
        return n
    }
    else{
        return n[n.length-1]+reversestring(n.slice(0,-1))
    }
}

console.log(reversestring("jeeboombaa"));