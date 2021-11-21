let n = 43
let scndNum = n%10*10
let frstNum = Math.floor(n/10)
let result = frstNum + scndNum
if(result<=n){
  console.log("True");
}
else{
  console.log("False");
}