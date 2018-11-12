//Diberikan sebuah fungsi perkalianUnik(arr) yang menerima satu parameter berupa array yang berisikan angka.//
//Function akan mereturn array bary yang mengandung angka yang setiap nilainya merupakan hasil kali angka lain yang bukan angka itu sendiri.//
//Contoh jika arr adalah 1, 2, 3, 4, 5 maka function akan me return 120, 60, 40, 30, 24//
//Karena 120 adalah 2 3 4 5, 60 adalah 1 3 4 5, 40 adalah 1 2 4 5 dan seterusnya.//

function perkalianUnik(arr) {
    var j = 0
    var h = []
    var x = arr.slice()
    while(j < arr.length) {
        x.splice(j, 1, 1)
        if(arr.length === 2) {
            h.push(x[0] * x[1])
        }
        if(arr.length === 3) {
            h.push(x[0] * x[1] * x[2])
        }
        if(arr.length === 4) {
            h.push(x[0] * x[1] * x[2] * x[3])
        }
        if(arr.length === 5) {
            h.push(x[0] * x[1] * x[2] * x[3] * x[4])
        }
        j++
        x = arr.slice()
    }
    return h
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]