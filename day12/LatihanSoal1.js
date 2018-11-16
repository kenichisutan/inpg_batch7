var people = [
    [1, "Dimitri", "Hacktiv8"],
    [2, "Dhani", "Hacktiv8"],
    [3, "Icha", "Hacktiv8"]
]

var a = 0

function id() {
    while(a < people[people.length - 1][0]) {
        console.log("Name : " + people[a][1] + ", Company : " + people[a][2])
        a++
    }
}

id()