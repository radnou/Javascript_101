/**
|--------------------------------------------------
| Arrays
|--------------------------------------------------
*/

/**
 * An array is simply an object whose property name are the strings 
 * '0', '1','2' et...
 */
// declaring an array 

const numbers = [1,2,3,'many']
//access to an element 
console.log(numbers[3]) //many
//array index start, at 0 
console.log(numbers)
//array.length return the highest index+1 converted to  number 
console.log(numbers.length)
// an array can have missing elements 
const someNumbers = [,2,,56]
console.log(someNumbers[0]) // undefined
console.log(someNumbers[3]) // 56
console.log(someNumbers[2])// undefined
console.log("// ============================================================ Array insert ")
// add element 
console.log(someNumbers.length)
someNumbers[6] = 11 
console.log(someNumbers.length)
console.log(someNumbers)
console.log("// ============================================================ typeof Array  ")
console.log("get type of someNumbers", typeof(someNumbers)) // object 
let toto ={name :'Toto', age :23} 
console.log("get type of toto", typeof(toto)) //object 
console.log("toto is an array ? ", Array.isArray(toto)) // false 
console.log("someNumbers is an array ? ", Array.isArray(someNumbers)) // true 
console.log("// ============================================================ Convert an array in string   ")
console.log(typeof(''+someNumbers)) // string 
console.log(''+someNumbers) //string 
console.log(someNumbers) // array 
console.log("// ============================================================ Multidimensional arrays  ")
const multiDimArray =[
 [1,2,45,3,2],
 [32,26,12,2,6],
[34,6,2,45,7,5]
]  
// access to an element in multidimensional array 
console.log(multiDimArray[0][0])//1
console.log(multiDimArray[1][2]) //12


console.log("// ============================================================ Loop in array")
for (let index = 0; index < someNumbers.length; index++) {
  const elem = someNumbers[index];
  console.log(elem)
}