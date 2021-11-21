let b = 0
let n = 2
let result = 0;
for(let i = 1.1; i <= n ; i+=0.2){
  console.log(i);
  result += i
}
for(let i = 1.2; i <= n ; i+=0.2){
  console.log(i);
  result -= i
}
console.log(result.toFixed(1));

// let result = (n - 1) * -0.5
// console.log(result);