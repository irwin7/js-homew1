let x = 5
let n = 4
let res = x
for(let i = 1;i<=n;i++){
  res +=((-1)**i)*(x**(2*i+1))/(2*i+1)
  console.log(res);
}
console.log("result : " + (x-res).toFixed(2))