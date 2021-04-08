/**
 * Expressions and Statement
 * 
 */

/**
 * An expression has a value
 */
// Example
let number = 5 * 3
// 5*3 is an expression 
// 15 is the value 
number = 6 * 7;
// is a statement whose effect is to declare 
// and initialize the `number` variable
// Such a statement is called a variable declaration 
// The simplest form of a statement is an
// `expression statement` is consist of and expression followed by a ;
// console.log(5*4);
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
7 * 7; // no effect on program
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
let number2 = 5 * 4;
//same for this 
// console.log(5*4)
// this will show
//  20, is the side effect of the console.log() 
// and undefined is the value of the method call


/**
 * 2.2 Semicolon Insertion
 * certain statement must be terminated by a semicolon
 * the rule is when processing a statement the parser includes every token
 * until it encourtes a semicolon or an "offending token" 
 * aka something that could not be part of the statement 
 * examples 
 */

let a = number2 +
  Math.PI
let b = number2
// console.log(a,b) 

// a = number2 + PI
// b= number2 only 
// the "let" token at the start of the third line is offending
// then the parser insert a semicolon the line separator

/**
 * Example 2
 */
//let x = a
//(console.log(6*7))
/**
 * no semicolon is inserted after the a
 * so 
 * x = a(console.log(6*7))d
 * a is interpreted as a function 
 */

/**
 * Example 3
 * 
 */
let z = a
// [1,2,4].forEach(console.log);
const arrayNumber = [1, 23, 5]
// arrayNumber.forEach(console.log)

//  console.log("\u{1F600}");
let str = '223E'

function digital_root(n) {
  let nS = n.toString()
  let sum = 0;

  if (nS.length >2){
    let i = 0;
    while (i < nS.length) {
      // console.log(nS[i])
      sum = sum + parseInt(nS[i]);
      i++;
    }
    if (sum.toString().length == 1) {
      console.log("Size of sum", sum.toString().length, "Value of sum", sum)
      // console.log(sum)
      return typeof(sum);
    } else {
      digital_root(parseInt(sum))
  
  }
}
}
console.log(digital_root(16))
console.log(digital_root(456))

let string = "skdjfskldjf"
