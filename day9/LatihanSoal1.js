//Latihan Soal 1//
//Buat array angka 1-100//

function iterationNumber(a = 0, b = 0) {
    var c = []
    while(a < b) {
        a++;
        c.push(a)
    }
    return c
}

console.log(iterationNumber(15,20))