function palindrome(str)
{
    if(str<=1)
    {
        return true
    }
    else{
        if(str[0]==str[str.length-1])
        {
            return palindrome(str.slice(1,-1))
        }
    }
    return false
}

console.log(palindrome("MALAYALAM"));
console.log(palindrome("jumbalaka"));