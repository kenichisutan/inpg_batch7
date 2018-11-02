//Print angka 1-100//
//Jika angka ganjil maka "Angka Ganjil = ...//
//Jika angka genap maka "Angka Genap = ...//

var a = 0

while(a < 100) {
  a++;
  if(a%2===0) {
    console.log("Angka Genap = " + a)
  } else if(a%2===1) {
    console.log("Angka Ganjil = " + a)
  }
}
