function gcd(fnumber, snumber) {
    var af = 0
    var as = 0
    var ax = 0
    var ay = 0
    var gcd1 = []
    var gcd2 = []
    var cond
    while(af < fnumber) {
        if(fnumber % af === 0) {
            gcd1.push(af)
        }
        af++
    }
    while(as < snumber) {
        if(snumber % as === 0) {
            gcd2.push(as)
        }
        as++
    }

    while(ax < gcd1.length) {
        while(ay < gcd2.length) {
            if(gcd1[ax] === gcd2[ay]) {
                cond = gcd2[ay]
            }
            ay++
        }
        ax++
        ay = 0
    }
    return cond
}

console.log(gcd(12, 16))
console.log(gcd(50, 40))
console.log(gcd(22, 99))
console.log(gcd(24, 36))
console.log(gcd(17, 23))