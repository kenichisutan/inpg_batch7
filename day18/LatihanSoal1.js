function numberIterator(num, a = 0) {
    if(a === num) {
        return num
    }
    else return String(a) + String(numberIterator(num, a + 1))
}

console.log(numberIterator(5))
console.log(numberIterator(7))
console.log(numberIterator(3))
console.log(numberIterator(1))
console.log(numberIterator(0))