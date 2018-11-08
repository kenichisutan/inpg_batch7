//Soal Kelima//
//Cari nilai tengah yang menerima 2 parameter.//
//Jika nilai tengah tidak bulat maka bulatkan ke angka dibawahnya./

function nilaiTengah(a=1, b=10) {
    var c = (a+b) / 2;
    if(c % 1 !== 0) {
        c = c - 0.5
    }
    console.log(c);
}

nilaiTengah(3, 8)