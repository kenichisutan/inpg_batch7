//Latihan Soal 1//
//Buat array angka 1-100//

function iterationNumber(a = 0, b = []) {
    while(a < 100) {
        a++;
        b.push(a)
    }
    return b
}

console.log(iterationNumber())