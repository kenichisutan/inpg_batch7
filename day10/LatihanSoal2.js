//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.//
//Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.//
//Contoh, jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2.//
//Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.//

function targetTerdekat(arr) {
    var o = 0
    var x = 0
    var a = 0
    while(o === 0) {
        if(arr[a] === 'o') {
            o = a
        }
        a++
    }
    a = 0
    while(x === 0) {
        if(arr[a] === 'x') {
            x = a
        }
        a++
    }
    a = 0
    if(x < o) {
        return o - x
    }
    if(o < x) {
        return x - o
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2