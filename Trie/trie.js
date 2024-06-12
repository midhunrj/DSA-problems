class trienode{
    constructor()
    {
        this.children={}
        this.isEndofWord=false
    }
}

class Trie{
    constructor()
    {
        this.root=new trienode()
    }

    insert(word)
    {
        let node=this.root
        for(let char of word)
        {
            if(!node.children[char])
            {
                node.children[char]=new trienode()
                console.log("assigning character",node);
            }
            node=node.children[char]
            console.log(node,"after inserting evey word");
        }
        
        node.isEndofWord=true

        console.log("after endofword true",node);

    }
    
    search(word)
    {
        let node=this.root
        for(let char of word)
        {
            if(!node.children[char])
            {
                return false
            }

            node=node.children[char]
        }
        return node.isEndofWord
    }

    startswith(prefix)
    {
        let node=this.root
        for(let char of prefix)
        {
            if(!node.children[char])
            {
                return false
            }
            node=node.children[char]
        }
        return true
    }

    collectwords(node,prefix,words)
    {
        if(node.isEndofWord)
        {
            words.push(prefix)
        }
        for(let char in node.children)
        {
            this.collectwords(node.children[char],prefix+char,words)
        }
    }

    getwordswithprefix(prefix)
    {
        let node=this.root
        for(let char of prefix)
        {
            if(!node.children[char])
            {
                return []
            }
            node=node.children[char]
        }
        const words=[]
        this.collectwords(node,prefix,words)
        return words
    }

}

const trie=new Trie()
trie.insert("apple")
//trie.insert("app")
trie.insert("blob")
//trie.insert("kylapply")

console.log(trie.search("app"));
console.log(trie.search("appl"));
console.log(trie.startswith("app"));
console.log(trie.getwordswithprefix("app"));
console.log(trie);