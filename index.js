//Golden Rules 
/*
1. Declare variables with let or const not var. 
2. Use strict mode 
3. Know your types and avoid automatic type conversion 
4. Understand :
  a. prototype 
  b.Use modern syntax for classes, constructors and methods 
5. Don't use "this" out constructors or methods

Running JavaScript wit Node.js REPL
  REPL : read-eval-print-loop
*/


/**
============================================================
| Values & Variables 
============================================================
*/
// |--------------------------------------------------
// Types and the typeof Operator
// |--------------------------------------------------


let a = 6
let b = 7
console.log(a * b)
// Return the type of a variable 
console.log(typeof(a))

let counter = 0
console.log(counter)
counter = "zero"
//Variables don't have type you can do this, but it's a very bad idea. 
console.log(counter )

let x 
console.log(x) // Return undefined 


//To have to never change the value of variable use const in variable declaration 
const PI = 3.141592653589793
console.log(PI)

const FREEZING = 0, BOILING = 100
let z, y

/**
 * Resume 
 * var counter = 0 OBSOLETE, prefer let 
 * contter = 1, the MISSPELLING creates a new variable !
 * « create upon first assignment” is an error in strict mode, a mode that forbids certain outdated constructs. »
 * You can't reasing a const variable 
 * the semicolon are not mandatory
 * Know the type of your variable before create them 
 */
/**
|--------------------------------------------------
| IDENTIFIERS
|--------------------------------------------------
*/
/**
 * The name of variable follow theses rules 
 * « An identifier consists of Unicode letters, digits, and the _ and $ characters. The first character cannot be a digit. »
 * « Some programmers use identifiers starting or ending with underscores to indicate “private” features »
 * « In strict mode, these keywords are also forbidden:
« implements interface let package protected private public static»
« The following keywords are more recent additions to the language;  you can use them as identifiers for backwards compatibility,  »
« await as async from get of set target yield»
 */

const π = 3.141592653589793
console.log(π)
/**
|--------------------------------------------------
| Numbers 
|--------------------------------------------------
*/
/**
 * JavaScript has no explicit integer type 
 * All Number are double-precision floating point numbers 
 * « If the integer range is insufficient, you can use “big integers,” which can have an arbitrary number of digits »
 */
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_SAFE_INTEGER)

const pasVraimentPI = parseFloat('3.14')
const encoreMoinsPI = parseInt('3')
console.log(pasVraimentPI)
console.log(encoreMoinsPI)

const pasDuToutPI = pasVraimentPI.toString()
const encoreMoinsPiStr = (3).toString()
console.log(pasDuToutPI)
console.log(typeof(encoreMoinsPiStr))
console.clear()
/**
|--------------------------------------------------
| Arithmetic operators  
|--------------------------------------------------
*/

z = 2
console.log("hmm: ", z);
y = 2
console.log("Raising to a Power")
console.log(z**y)
console.log("Assignment and arithmetic operation")

z +=10

















