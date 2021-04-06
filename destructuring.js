/**
|--------------------------------------------------
| DESTRUCTURING
|--------------------------------------------------
*/
// the act of fetching the elements of an array or values of an object 
/**
 * array 
 */

let pair =  [23,12]
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