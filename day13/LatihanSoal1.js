function removeSpaces(text) {
    return text.replace(/\s/g, " ")
}

function reverseText(text) {
    return text.split("").reverse().join("")
}

function updateVowels(text) {
    var a = 0
    var textarr = []
    while(a < text.length) {
        textarr.push(text[a])
        a++
    }
    
    a = 0

    while(a < text.length) {
        if(textarr[a] === "a") {
            textarr.splice(a, 1, "b")
        }
        if(textarr[a] === "i") {
            textarr.splice(a, 1, "j")
        }
        if(textarr[a] === "u") {
            textarr.splice(a, 1, "v")
        }
        if(textarr[a] === "e") {
            textarr.splice(a, 1, "f")
        }
        if(textarr[a] === "o") {
            textarr.splice(a, 1, "p")
        }
        if(textarr[a] === "A") {
            textarr.splice(a, 1, "B")
        }
        if(textarr[a] === "I") {
            textarr.splice(a, 1, "J")
        }
        if(textarr[a] === "U") {
            textarr.splice(a, 1, "V")
        }
        if(textarr[a] === "E") {
            textarr.splice(a, 1, "F")
        }
        if(textarr[a] === "O") {
            textarr.splice(a, 1, "P")
        }
        a++
    }
    return textarr.join("")
}

function encrypt(text) {
    return updateVowels(reverseText(removeSpaces(text)))
}

console.log(encrypt("nama gua itu kenichi"))