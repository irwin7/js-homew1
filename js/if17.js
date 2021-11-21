let n = 7677
let frstNum = 0
let scndNum = 0
let thrdNum = 0
let frthNum = 0
let result = 0
if(n<10){
  console.log(n)
}
else if(n<100 && n>=10){
  frstNum = Math.floor(n/10)
  scndNum = n%10
  if(frstNum%2==1){
    result +=frstNum
  }
  if(scndNum%2==1){
    result +=scndNum
  }
  console.log(result)
}
else if(n<1000 && n>=100){
  frstNum = Math.floor(n/100)
  scndNum = Math.floor(n%100/10)
  thrdNum = n%10
  if(frstNum%2==1){
    result +=frstNum
  }
  if(scndNum%2==1){
    result +=scndNum
  }
  if(thrdNum%2==1){
    result +=thrdNum
  }
  console.log(result);
}
else if(n<10000 && n>=1000){
  frstNum = Math.floor(n/1000)
  scndNum = Math.floor(n%1000/100)
  thrdNum = Math.floor(n%1000/10%10)
  frthNum = n%10
  if(frstNum%2==1){
    result +=frstNum
  }
  if(scndNum%2==1){
    result +=scndNum
  }
  if(thrdNum%2==1){
    result +=thrdNum
  }
  if(frthNum%2==1){
    result +=frthNum
  }
  console.log(result);
}