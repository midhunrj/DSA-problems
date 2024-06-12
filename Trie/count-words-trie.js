class Trienode{
    constructor()
    {
        this.children={}
        this.isEndofword=false
    }
}

class Trie{
    constructor()
    {
        this.root=new Trienode()
    }

    insert(word)
    {
        let node=this.root
        console.log("node before",node);
        for(let char of word)
        {
            if(!node.children[char])
            {
                
                node.children[char]=new Trienode()
                 console.log("when inserting ",node);
                //  console.log("node child",node.children[char]);
            }

            node=node.children[char]

            
        }
       
        //  console.log("after loop insert",node);
        node.isEndofword=true
        // console.log()
        // console.log(trie);


    }

    countwords()
    {
        return this.countwordshelp(this.root)
    }

    countwordshelp(node)
    {
        //console.log("in wordshelp",node);
        if(!node)
        {
            return 0
        }

        let count=0
        if(node.isEndofword)
        {
            count++
        }

        for(let child in node.children)
        {
            count +=this.countwordshelp(node.children[child])
        }
        return count
    }

    countletters()
    {
        return this.countlettershelp(this.root,0)
    }
    countlettershelp(node,currentlength)
    {

       // console.log("in lettershelp",node);

        if(!node)
        {
            return 0
        }

        let totalletters=0

        if(node.isEndofword)
        {
            totalletters +=currentlength
        }

        for(let char in node.children)
        {
            totalletters +=this.countlettershelp(node.children[char],currentlength+1)
        }

        return totalletters
    }


    countlettersofword(word)
    {
        console.log("word is",word);
        let node=this.root
        for(let char of word)
        {
            if(!node.children[char])
            {
                return 0
            }

            node=node.children[char]
        }
        return node.isEndofword?word.length:0
    }

    autocomplete(prefix)
    {
        console.log("prefix is",prefix);
        let node=this.root
        for(let char of prefix)
        {
        if(!node.children[char])
        {
            return []
        }
       
        node=node.children[char]
       }

       return this.findwordswithprefix(node,prefix)

    }

    findwordswithprefix(node,prefix)
    {
        let result=[]
        if(node.isEndofword)
        {
            result.push(prefix)
        }

        for(let char in node.children)
        {
            result=result.concat(this.findwordswithprefix(node.children[char],prefix+char))
        }
        return result
    }

    longestprefix()
    {
        let node=this.root
        let prefix=''
        while(Object.keys(node.children).length===1 && !node.isEndofword)
        {
            let keys=Object.keys(node.children)
            prefix +=keys[0]
            node=node.children[keys[0]]
        }
        return prefix
    }

    longestword()
    {
        return this.findlongestwordhelp(this.root,"")
    }

    findlongestwordhelp(node,prefix)
    {

        let longestword=prefix

        for(let char in node.children)
        {
            const currentprefix=prefix+char
            const word=this.findlongestwordhelp(node.children[char],currentprefix)
            if(word.length>longestword.length)
            {
                longestword=word
            }
        }
        if(node.isEndofword&&prefix.length>longestword.length)
        {
            longestword=prefix
        }
        return longestword
    }
}

const trie=new Trie()
trie.insert("apple")
trie.insert('orange')
trie.insert("grapes")
trie.insert("pineapple")
trie.insert("strawberry")
trie.insert("application")
trie.insert("apre")
trie.insert("alavudin")
console.log("total words in the  trie",trie.countwords());
console.log("total letters in the trie",trie.countletters());
console.log("letters of word",trie.countlettersofword("strawberry"));
console.log("autocomplete words :",trie.autocomplete("a"));
console.log("the longest prefix in the current trie is:",trie.longestprefix());
console.log("the longest word in the trie is :",trie.longestword());