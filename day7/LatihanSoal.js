//Jika name pengunjung kosong, ia tidak boleh masuk.//
//Jika age dibawah 17 tahun, ia hanya boleh memesan juice.//
//Jika age 17 tahun keatas, ia hanya boleh memesan anggur.//
//Juice memiliki harga 50000, Anggur memiliki harga 300000.//

var name = "Gana"
var age = 20
var money = 350000

if(name) {
    if(age >= 17) {
        var minum = 300000
    }
    if(age < 17) {
        var minum = 50000
    }
    if (minum > money) {
        console.log("Uang tidak cukup. Anda harus pulang.");   
    }
    if (minum <= money) {
        var sisa = money - minum
        console.log("Anda bisa pesan minum. Sisa uang anda: Rp." + sisa)
    }
} else {
  console.log("Anda tidak boleh masuk!")
}