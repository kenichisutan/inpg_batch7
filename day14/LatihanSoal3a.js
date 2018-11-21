//Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).

//Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), coba juga menggunakan algoritma sortingmu sendiri

function numberSorting(arr) {
    var arrx = []
    var a = 0
    var arrlength = arr.length
    while(a < arrlength) {
        arrx.push(Math.min(...arr))
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
        a++
    }
    return arrx
}

function sortByCharacter (text) {
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l" , "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var a = 0
    var alp = []
    while(a < text.length) {
        alp.push(alphabet.indexOf(text[a]))
        a++
    }
    var sortedindex = numberSorting(alp)
    var sortedalphabet = []
    a = 0
    while(a < sortedindex.length) {
        sortedalphabet.push(alphabet[sortedindex[a]])
        a++
    }

    return sortedalphabet.join("")
}
    
    // TEST CASES
    console.log(sortByCharacter('hello')); // 'ehllo'
    console.log(sortByCharacter('truncate')); // 'acenrttu'
    console.log(sortByCharacter('developer')); // 'deeeloprv'
    console.log(sortByCharacter('software')); // 'aeforstw'
    console.log(sortByCharacter('aegis')); // 'aegis'