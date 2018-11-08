//Soal Kelima//
//Cari nilai tengah yang menerima 2 parameter.//
//Jika nilai tengah tidak bulat maka bulatkan ke angka dibawahnya.//

function nilaiTengah(a=1, b=11) {
    var c = (a+b) / 2
    if(a % 2 === 0) {
        if(b % 2 === 0) {
            console.log(c);
        }
        else if(b % 2 !== 0) {
            console.log(c - 0.5);
        }
    }
    else if(a % 2 !== 0) {
        if(b % 2 !== 0) {
            console.log(c);
        }
        else if(b % 2 === 0) {
            console.log(c - 0.5);
        }
    }
}

nilaiTengah(33, 99)