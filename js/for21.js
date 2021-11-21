let n = 6
let b = 1
let a = 0

for(let i=1; i<=n; i++){
  b*=i
  a+=1/b
}
console.log("jami : " + (1+a).toFixed(2));