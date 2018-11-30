function countLetters(word, letters) {
    if(word[0] === letters) {
        return 1 + countLetters(word.slice(1), letters)
    }
    if(word.length === 1) {
        return 0
    }
    return countLetters(word.slice(1), letters)
}

console.log(countLetters("12104123", "1"))
console.log(countLetters("the quick brown fox", "o"))
console.log(countLetters("lorem ipsum", "a"))
console.log(countLetters("hahaha", "h"))