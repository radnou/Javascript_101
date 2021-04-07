/**
|--------------------------------------------------
| Advanced Destructuring
|--------------------------------------------------
*/ 
/**
 * You can destructure nested object 
 */
let pat = {
  name :"Par", 
  birthday : {day:13,month:12,year:2009}
}
let {birthday: {year:patsBirthday}}=pat
console.log(patsBirthday)