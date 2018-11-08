//Buat function dengan bilangan prima//

function bilanganPrima(a=1, b=5) {
    while(a < b) {
        a++;
        var prime = true;
        var c = 2
        while(c < a) {
            if(a % c === 0) {
                prime = false
            }
            c++;
        }
        if(prime) {
        console.log("Bilangan Prima = " + a)
        }
    }
}

bilanganPrima(1, 10)