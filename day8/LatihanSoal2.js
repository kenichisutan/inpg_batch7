//Soal kedua//
//Lanjutkan soal pertama namun keluarkan hasil ganjil dan genap.//

function loopingAngka(angka0=0, angka1=1) {
    while(angka0 <= angka1) {
        if(angka0 % 2 === 0) {
            console.log("Bilangan Genap= " + angka0);
            angka0++;
        }
        else if(angka0 % 2 !== 0) {
            console.log("Bilangan Ganjil= " + angka0);
            angka0++;
        }
    }
}

loopingAngka(33, 99);
loopingAngka(4, 25);
loopingAngka(99, 122);