//Print angka 3-30//
//Jika angka habis dibagi 3, print "HACK"//
//Jika angka habis dibagi 6, print "FOX"//
//Jika angka habis dibagi 15, print "HACKFOX"//

var a = 0

while(a < 30) {
  a += 3;
  if(a%15 === 0) {
    console.log("HACKFOX = " + a)
  } else if(a%6 === 0) {
    console.log("FOX = " + a)
  } else if(a%3 === 0) {
    console.log("HACK = " + a)
  }
}
