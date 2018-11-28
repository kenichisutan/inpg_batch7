function complexConversion (text) {
    var textsplit = text.split(",")
    var con = {
        name: "",
        email: "",
        gender: "",
        age: "",
        city: "",
        province: ""
    }
    for(var a = 0; a < textsplit.length; a++) {
        if(textsplit[a][0] === "n") {
            for(var b = 5; b < textsplit[a].length; b++) {
                con.name = con.name + textsplit[a][b]
            }
        }
        if(textsplit[a][0] === "e") {
            for(var b = 6; b < textsplit[a].length; b++) {
                con.email = con.email + textsplit[a][b]
            }
        }
        if(textsplit[a][0] === "g") {
            for(var b = 7; b < textsplit[a].length; b++) {
                con.gender = con.gender + textsplit[a][b]
            }
        }
        if(textsplit[a][0] === "a") {
            for(var b = 4; b < textsplit[a].length; b++) {
                con.age = con.age + textsplit[a][b]
            }
        }
        if(textsplit[a][0] === "c") {
            for(var b = 5; b < textsplit[a].length; b++) {
                con.city = con.city + textsplit[a][b]
            }
        }
        if(textsplit[a][0] === "p") {
            for(var b = 9; b < textsplit[a].length; b++) {
                con.province = con.province + textsplit[a][b]
            }
        }
    }
    if(con.name === "") {
        delete con.name
    }
    if(con.email === "") {
        delete con.email
    }
    if(con.gender === "") {
        delete con.gender
    }
    if(con.age === "") {
        delete con.age
    }
    if(con.city === "") {
        delete con.city
    }
    if(con.province === "") {
        delete con.province
    }
    return con
  }
  
  // TEST CASES
  console.log(complexConversion('name:Dimitri,email:dimitri@mail.com'));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(complexConversion('name:Erwin,gender:male,age:21'));
  // { name: 'Erwin', gender: 'male', age: '21' }
  
  console.log(complexConversion('city:Surabaya,province:East Java'));
  // { city: 'Surabaya', province: 'East Java' }