function convert (data) { 
    var results = []
    var ab = {
        id: "",
        firstName: "",
        lastName: "",
        email: ""
    }
    var ad = []

    for(var a = 0; a < data.length; a++) {
        ab.id = data[a][0]
        ab.firstName =data[a][1]
        ab.lastName = data[a][2]
        ab.email = data[a][3]
        ad.push(ab)

        ab = {
            id: [],
            firstName: [],
            lastName: [],
            email: []
        }
    }
    return ad
}
    
    // TEST CASES 
    console.log(convert([ 
    [1, 'Dimitri', 'Wahyudiputra', 'dimitri@mail.com'], 
    [2, 'Sergei', 'Dragunov', 'sergei@mail.com'] 
    ])); 
    
    /* 
    [ { id: 1, 
    firstName: 'Dimitri', 
    lastName: 'Wahyudiputra', 
    email: 'dimitri@mail.com' }, 
    { id: 2, 
    firstName: 'Sergei', 
    lastName: 'Dragunov', 
    email: 'sergei@mail.com' } ] 
    */ 
    
    console.log(convert([])); 
    // [] 
    
    
    //Diberikan sebuah function yang menerima parameter array multidimensi, buatlah sebuah program JavaScript untuk mengubah input menjadi format array of objects seperti di contoh.
    
    