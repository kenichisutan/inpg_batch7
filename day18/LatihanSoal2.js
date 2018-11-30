function countLetters(word, letters, b = 0, a = 0) {
    if(word[b] === letters) {
        return countLetters(word, letters, b + 1, a + 1)
    }
    if(b === word.length) {
        return a
    }
    return countLetters(word, letters, b + 1, a)
}

console.log(countLetters("12104123", "1"))
console.log(countLetters("the quick brown fox", "o"))
console.log(countLetters("lorem ipsum", "a"))
console.log(countLetters("hahaha", "h"))