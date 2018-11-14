//Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.//
//Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat.//
//Contoh, jika arr adalah 'x', ' ', 'o', ' ', ' ', 'x', maka jarak terdekat dari 'o' ke 'x' adalah 2.//
//Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.//

function targetTerdekat(arr) {
    var o = -1
    var x = -1
    var a = 0
    while(o === -1) {
        if(arr[a] === 'o') {
            o = a
        }
        else a++
    }
    a = 0
    while(x === -1) {
        if(arr[o + a] === 'x') {
            x = a
        }
        else if(arr[o - a] === 'x') {
            x = a
        }
        else if(a === arr.length * 2) {
            x = "Blank"
        }
        else a++
    }

    if(x === "Blank") {
        return 0
    }

    if(x < o) {
        return o - x
    }
    else if(o < x) {
        return x - o
    }
}
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2