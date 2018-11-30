function countLetters(word, letters, b = 0) {
    if(word[b] === letters) {
        return 1 + countLetters(word, letters, b + 1)
    }
    if(b === word.length) {
        return 0
    }
    return countLetters(word, letters, b + 1)
}

console.log(countLetters("12104123", "1"))
console.log(countLetters("the quick brown fox", "o"))
console.log(countLetters("lorem ipsum", "a"))
console.log(countLetters("hahaha", "h"))