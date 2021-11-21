let n = 569
let frstNum = Math.floor(n/10000)
let scndNum = Math.floor(n/1000%10)
let thrdNum = Math.floor(n%1000/100)
let frthNum = Math.floor(n%1000/10%10)
let ffthNum = n%10
if(frstNum==scndNum && thrdNum==frstNum && frstNum==frthNum && frstNum==ffthNum){
  console.log(frstNum);
}
else if(frstNum>=scndNum && frstNum>=thrdNum && frstNum>=frthNum && frstNum>=ffthNum){
  console.log(frstNum);
}
else if(scndNum>=frstNum && scndNum>=thrdNum && scndNum>=frthNum && scndNum>=ffthNum){
  console.log(scndNum);
}
else if(thrdNum>=frstNum && thrdNum>=scndNum && thrdNum>=frthNum && thrdNum>=ffthNum){
  console.log(thrdNum);
}
else if(frthNum>=frstNum && frthNum>=scndNum && frthNum>=thrdNum && frthNum>=ffthNum){
  console.log(frthNum);
}
else if(ffthNum>=frstNum && ffthNum>=scndNum && ffthNum>=thrdNum && ffthNum>=frthNum){
  console.log(ffthNum);
}
else{
  console.log("Fly B*tch!");
}