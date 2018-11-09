//Latihan Soal 2//
//Seperti soal 1 tapi pakai ganjil genap//

function iterationNumber(a = 0, b = []) {
    while(a < 100) {
        a++;
        if(a % 2 === 0) {
            b.push(a + " = Genap")
        }
        if(a % 2 !== 0) {
            b.push(a + " = Ganjil")
        }
    }
    return b
}

console.log(iterationNumber())