var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

var textarr = []
var pretext = []
var a = 0

function splitArray() {
    pretext.push(text.split(","))
    while(a < 3) {
        textarr.push(pretext[0][a].split(":"))
        a++
    }
    return textarr
}

console.log(splitArray())