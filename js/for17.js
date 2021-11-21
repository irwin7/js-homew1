let n = 3
let a = 5
let b = 1
let c = a
console.log(a);
for(let i=1;i<n;i++){
  a*=a
  console.log(a);
  b+=a
}
console.log("umumiy : "+ (b +c));