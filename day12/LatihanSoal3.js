var number = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

number.sort((a, b) => a-b)

var a = 0
var b = a + 1
var m = 0
var n = 0

function cieModus() {
    while(a < number.length) {
        n = 0
        while(number[a] !== number[b]) {
            a++
            b++
            if(a > number.length) {
                break
            }
        }
        while(number[a] === number[b]) {
            n++
            a++
            b++
            if(a > number.length) {
                break
            }
        }
        if(n > m) {
            m = number[a - 1]
        }
    }
    return m
}

console.log(cieModus())