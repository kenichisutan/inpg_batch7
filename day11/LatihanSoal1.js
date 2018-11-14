//Buat function bernama multiDimensi menerima 2 parameter yang
//merupakan panjang senilai array kemudian gambarkan
//Contoh:
//multiDimensi[2,5] -> [[1,2,3,4,5], [1,2,3,4,5]]

function multiDimensi(a = 2, b = 5) {
    var x = 1
    var y = 1
    var c = []
    var d = []
    while(b >= x) {
        c.push(x)
        x++
    }
    while (y <= a) {
        d.push(c)
        y++
    }
    return d
}

console.log(multiDimensi(5,20))