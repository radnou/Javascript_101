/**
 * The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples

"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
 */

function duplicateEncode(word){
  let countTime = [];
  let msg = '';
  for (let index = 0; index < word.length; index++) {
    let wordSearch = word[index].toLowerCase();
    countTime[index]=0;    
    for (let j = 0; j < word.length; j++) {
       //console.log("Mot",wordSearch,"en Cours,",word[j],"Comparaison",wordSearch === word[j])
       if (wordSearch === word[j].toLowerCase()) {
              
         countTime[index]= countTime[index] +1;
       }      
    }
  }
  console.log(word, countTime)
  for (let z = 0; z < countTime.length; z++) {
    const element = countTime[z];
    //console.log(element)
    if (element==1) {
      msg = msg.concat('(');
    } else {
     msg = msg.concat(')');
    }
  }
  return msg
}


//best solutions : 
function bestDuplicateEncode(word){
  return word
    .toLowerCase() // minuscule 
    .split('') // to array 
    .map( function (a, i, w) { // parcours de l'array 
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')' // ternaire pour comparer l'index de la première occurence du String et la dernière 
    })
    .join(''); //array to String 
}

console.log(duplicateEncode("din"),"(((");
console.log(duplicateEncode("recede"),"()()()");
console.log(duplicateEncode("Success"),")())())","should ignore case");
console.log(duplicateEncode("(( @"),"))((");

