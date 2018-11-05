//Cetak 1-100//
//Hanya cetak bilangan prima//

var a = 1

while(a < 100) {
    a++;
    var prime = true;
    var b = 2
    while(b < a) {
        if(a % b === 0) {
            prime = false
        }
        b++;
    }
    if(prime) {
    console.log("Bilangan Prima = " + a)
    }
}