/**
|--------------------------------------------------
| Advanced Destructuring
|--------------------------------------------------
*/ 
/**
 * You can destructure nested object 
 */
let pat = {
  name :"Pat", 
  birthday : {day:13,month:12,year:2009}
}
let {birthday: {year:patsBirthday}}=pat
console.log(patsBirthday)
//same effect as this 
let patYearBirthday = pat.birthday.year
/**
 * Rest Declarations
 * when destructured an array, 
 * You can capture the remaining values 
 * */
let numbers = [1,3,5,3,5]
let [first,second,...others] = numbers
console.log(first,second,others)