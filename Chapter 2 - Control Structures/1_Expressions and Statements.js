/**
 * Expressions and Statement
 * 
 */

/**
 * An expression has a value
 */
// Example
let number = 5*3
// 5*3 is an expression 
// 15 is the value 

let number = 6*7;
// is a statement whose effect is to declare 
// and initialize the `number` variable
// Such a statement is called a variable declaration 
// The simplest form of a statement is an
// `expression statement` is consist of and expression followed by a ;
console.log(5*4);
/**
 * this line has to effect to dislay 20
 * it also have a value, which happens to be `undefined`
 * console.log() return nothing 
 */
/**
|--------------------------------------------------
| An expression statement is only useful for an expression that has side effect.
the expression statement is legal Javascript but i has no effect in program
|--------------------------------------------------
*/
7*7; // no effect on program
// the value is displayed on console 
/**
 * that is what a read-eval-print loop or REPL does 
 * it reads an expression, evaluates it and prints the value 
 */
/**
 * Statements don't have value but the JS REPL displays values for them anyways 
 * for example this expression below will show 
 * undefined 
 */
let number2 = 5*4;
//same for this 
console.log(5*4)
// this will show
//  20, is the side effect of the console.log() 
// and undefined is the value of the method call

