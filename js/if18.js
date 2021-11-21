let a = 5
let b = 6
let c = 9
if(a==c && b==a){
  console.log(a);
}
else if(a>=c && a>=b){
  console.log(a);
}
else if(b>=c && b>=a){
  console.log(b);
}
else if(c>=b && c>=a){
  console.log(c);
}