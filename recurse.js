function f(n)
{
    if(n<=1)
    {
        return n
    }

    f(n-1)
    console.log("f()",n);
    f(n-1)
}

f(5)