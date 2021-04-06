/**
|--------------------------------------------------
| Objets
simply a set of name/value paris  or "property"
|--------------------------------------------------
*/
const harry ={name :'Harry',age: 34}

let harrysAge = harry.age
console.log(harry.name, harrysAge)
harry.age = 50

// Add new property like this 
harry.salary = 90000
//show content of object 
console.log(harry)
// delete property 
delete harry.salary
console.log(harry)

//accessing to a nonexistent property yields 
let boss = harry.supervisor //return underfined 
console.log(boss)

// A property name can be computed 
let field = 'Age'
harrysAge = harry[field.toLowerCase()]
console.log(harrysAge)
// ============================================================ OBJECT LITERAL SYNTAX
let toto = {
  name : 'Toto Dupont',
  age : 24, // trailing comma to add more property 
}
let age = 34

// can assign a property and variable with the same name 
toto = {name : 'Toto Dupont', age : age }
console.log(toto)
//shortcut 
let totoShortcut ={ name:'Toto Dupont',age}
totoShortcut = { name :'Toto Dupont',[field.toLowerCase()] :43 }
console.log(totoShortcut) 

// identifier 
let tata = {
name :'tata Dupont',
aged:23,
'favorite beer': 'Dodo',
}
console.log(toto['favorite beer'])
let Tom = { name: 'Tom Smith', 'favorite beer': 'IPA' }
console.log(Tom['favorite beer'])
