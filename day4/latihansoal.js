//Becak memiliki kecepatan 20km/jam, jika membawa 4 penumpang maka kecepatan berkurang 7km/jam, bila membawa lebih dari 2 penumpang maka kecepatan berkurang 5km/jam, selainnya maka kecepatan akan berkurang 2km/jam.//

var speed = 20
var passengers = prompt("passengers?")

if(passengers === 4) {
  speed -= 7
} else if(passengers > 2) {
  speed -= 5
} else {
  speed -= 2
}

console.log(speed)
