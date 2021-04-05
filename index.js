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


// 1. Values and Variables 
let a = 6
let b = 7
console.log(a * b)
console.table(typeof(a))

//never change the value of variable use const 
const PI = 3.141592653589793
console.log(PI)
PI = 4