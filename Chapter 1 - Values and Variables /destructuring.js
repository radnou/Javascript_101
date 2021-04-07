/**
|--------------------------------------------------
| DESTRUCTURING
|--------------------------------------------------
*/
// the act of fetching the elements of an array or values of an object 
/**
 * array 
 */

let pair =  [554,12]
let first = pair[0]
let second = pair[1]
let third 
// destructuring 
// pattern that describe how the variables should be matched with the right-hand side 
[first, second ] = pair 
/**
 * this statement declares and initializes 
 *  variables first and second 
 * with pair [0] and pair[1]
 */

 [first,[second,third]] = [1,[2, 3]]
console.log(first, second)

/**
 * you can swap values easily like this 
 */
 x = '99'
 y = '1'
console.log(x,y)
//swap 
x,y = x,y
console.log(x,y)
//you can swap variables between array and object
let harry = {
  name :'tata Dupont',
  age:23,
}
console.log("Before Swap",pair[0],harry.age)

// [pair[0],harry.age] = [13,42]
console.log("After Swap",pair[0],harry.age)

//this code below declares two variables harrysName & harrysAge 
// and initiate them with the 
 harry = { name: 'Harry', age: 42 }
let { name: harrysName, age: harrysAge } = harry
console.log(harrysName, harrysAge)

//destructuring an object with other method
// use variable with same name of property 
let {age, name } = harry
console.log(age, name)
//same as 
name = harry.name
age = harry.age

