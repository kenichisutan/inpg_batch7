function deleteUndefinedKeys (object) {
    var cos = {
        name: "",
        age: "",
        email: ""
    }

    if(object.name !== undefined) {
        cos.name = object.name
    }
    if(object.name === undefined) {
        delete cos.name
    }
    if(object.age !== undefined) {
        cos.age = object.age
    } 
    if(object.age === undefined) {
        delete cos.age
    }
    if(object.email !== undefined) {
        cos.email = object.email
    }
    if(object.email === undefined) {
        delete cos.email
    }

    return cos
}
  
  console.log(deleteUndefinedKeys({
    name: 'Dimitri',
    age: undefined,
    email: 'dimitri@mail.com'
  }));
  // { name: 'Dimitri', email: 'dimitri@mail.com' }
  
  console.log(deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  }));
  // {}