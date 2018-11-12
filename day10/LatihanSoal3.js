//Diberikan sebuah function numberProcessing(numberArr) yang menerima satu parameter berupa array yang berisikan angka. Tentukan nilai minimum, maksimum, rata-rata (genapkan ke bilangan terdekat), bilangan ganjil dan bilangan genap.//

function numberProcessing(numberArr) {
    var min0 = numberArr.slice()
    var max0 = numberArr.slice()
    var mean0 = numberArr.slice()
    var odd0 = numberArr.slice()
    var even0 = numberArr.slice()

    min0.sort(function(a, b){return a - b})
    var min = min0[0]

    max0.sort(function(a, b){return a - b})
    var max = max0[max0.length - 1]

    var x = 0
        while(mean0.length > 0) {
            var mean = 0
            mean = mean0[x]
        x++;
        }
    mean = mean / x

    var a = 0
    var odd = []
    for(a; a < odd0.length; a++) {
        if(odd0[a] % 2 !== 0) {
            odd.push(odd0[a])
        }
    }

    a = 0
    var even = []
    for(a; a < odd0.length; a++) {
        if(even0[a] % 2 === 0) {
            even.push(even0[a])
        }
    }

    return "Min : " + min + ", Max: " + max + ", Mean: " + mean + ", Odds: " + odd + ", Evens: " + even
}
   
   console.log(numberProcessing([1, 3, 5, 1, 2, 8, 10, 0, 3]));
   // "Min: 0, Max: 10, Mean: 4, Odds: 1-3-5-1-3, Evens: 2-8-10-0"
