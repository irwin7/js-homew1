let a = 8
let b = 9
let c = 8
if(a==b && b==c){
  console.log(a);
}
else if(a<=b && a>=c || a>=b && a<=c){
  console.log(a);
}
else if(b<=c && b>=a || b>=c && b<=a){
  console.log(b);
}
else if(c<=b && c>=a || c>=b && c<=a){
  console.log(c);
}