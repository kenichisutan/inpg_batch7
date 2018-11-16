//Sama seperti soal 1 tapi jika masuk ke index pertama
//print first dan index terakhir print last

function multiDimensi(a = 2, b = 5) {
    var x = 0
    var z = 0
    var o = 0
    var d = []
    var y = 0

    while(a > z) { 
        o = 0
        d.push([])
        while(o < b) {
            d[z].push(o + y + 1)
            o++
        }
        y += b 
        z++
    }
    
    while(x < a) {
        d[x].splice(0, 1, "first")
        d[x].pop()
        d[x].push("last")
        x++
    }

    return d
}

console.log(multiDimensi(2,5))