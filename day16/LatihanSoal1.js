function grouping (scores) {
    var a = 0
    var results = {
        pass: [],
        fail: []
    }
    while(a < scores.length) {
        if(scores[a] >= 75) {
            results.pass.push(scores[a])
        }
        else results.fail.push(scores[a])
        a++
    }
    return results
}
    
    console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30])); 
    // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] } 
    
    console.log(grouping([])); 
    // { pass: [], fail: [] } 
    
    
//Diberikan sebuah function yang menerima parameter berupa array, buatlah sebuah program JavaScript untuk grouping score yang lulus dan yang gagal. (Gagal jika score < 75) 
    