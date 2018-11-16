var number = [ 10, 8, 1, 9, 1, 7, 29, 1, 0, 4, 1, 7 ]

number.sort((a, b) => a-b)
var x = 0
var a = 0
var b = a + 1
var c

function cieModus() {
    while(x < number.length) {
        if(number[a] === number[b]) {
            c = number[a] 
        }
        a++
        x++
    }
    return "Mean = " + c
}
 
console.log(cieModus())