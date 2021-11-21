let Temp = 58
if(Temp<=0){
  console.log("Freezing");
}
else if(Temp>0 && Temp<=10){
  console.log("Very Cold");
}
else if(Temp>10 && Temp<20){
  console.log("Cold");
}
else if(Temp>20 && Temp<30){
  console.log("Normal");
}
else if(Temp>30 && Temp<40){
  console.log("Hot");
}
else if(Temp>40){
  console.log("Very Hot");
}