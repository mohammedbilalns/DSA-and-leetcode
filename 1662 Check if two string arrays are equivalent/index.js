

var arrayStringsAreEqual = function(word1, word2) {
    
    return word1.join('')==word2.join('')
};



console.log(arrayStringsAreEqual(["a", "cb"],["ab", "c"]))