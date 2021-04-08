
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