//Soal pertama//
//Buat fungsi dengan nama loopingAngka dengan nilai minimal//
//sebagai parameter angka pertama dan nilai akhir sebgai parameter//
//kedua. Contoh loopingAngka(5. 9) menghasilkan 5,6,7,8,9. Contoh kedua//
//loopingAngka(17, 28) menghasilkan 17,18,19,20,21,22 dst//

function loopingAngka(angka0=0, angka1=1) {
    while(angka0 <= angka1) {
        console.log(angka0);
        angka0++;
    }
}

loopingAngka(33, 99);
loopingAngka(4, 25);
loopingAngka(99, 122);