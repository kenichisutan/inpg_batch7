//Latihan Soal 3//
//Buat array 1-30//
//Jika angka habis dibagi 3 cetak "KAS"//
//Jika angka habis dibagi 6 cetak "KUS"//
//Jika angka habis dibagi 15 cetak "KASKUS"//

function kaskus(a = 1, b = []) {
    for(a; a <= 30; a++) {
        if(a % 15 === 0) {
            b.push("KASKUS");
        }
        else if(a % 6 === 0) {
            b.push("KUS");
        }
        else if(a % 3 === 0) {
            b.push("KAS");
        }
        else {
            b.push(a);
        }
    }
    return b
}

console.log(kaskus())