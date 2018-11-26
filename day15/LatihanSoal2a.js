function gcd(fnumber, snumber) {
    var af = 0
    var gcd1 = []
    while(af < fnumber) {
        if(fnumber % af === 0) {
            gcd1.push(af)
        }
        af++
    }
    var gcdlength = gcd1.length - 1
    while(gcdlength > 0) {
        if(snumber % gcd1[gcdlength] === 0) {
            return gcdlength
        }
        gcdlength--
    }
    return 1
}

console.log(gcd(12, 16))
console.log(gcd(50, 40))
console.log(gcd(22, 99))
console.log(gcd(24, 36))
console.log(gcd(17, 23))