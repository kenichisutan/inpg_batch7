function isPrime(number) {
    var a = 2
    var prime = true
    while(a < number) {
        if(number % a === 0) {
            prime = false
        }
        a++;
    }
    return prime
}

console.log(isPrime(3));
console.log(isPrime(7));
console.log(isPrime(6));
console.log(isPrime(23));
console.log(isPrime(33));