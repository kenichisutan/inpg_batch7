function threeStepsAB(text) {
    var aLoop1 = 0
    var aLoop2 = 1
    var cond = false
    var three = 3
    while(aLoop1 < text.length) {
        while(aLoop2 < three) {
            if(text[aLoop1 + aLoop2]) {
                three++
            }
            if(text[aLoop1 + aLoop2] === "b") {
                cond = true
            }              
            aLoop2++    
        }
        aLoop1++
        aLoop2 = 1
    }
    return cond
}

console.log(threeStepsAB("lane borrowed"))
console.log(threeStepsAB("i am sick"))
console.log(threeStepsAB("you are boring"))
console.log(threeStepsAB("barbarian"))
console.log(threeStepsAB("bacon and meat"))