let days=[ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

let now =new Date();

let today=now.getDay();
console.log("Today is" , days[today]);

let hours = now.getHours(); 
let CurrentHour = ((hours>12)?(hours%12):hours);

let min =now.getMinutes();
let ampm = hours>=12?"PM":"AM"; 
 console.log(CurrentHour+" : "+min+" "+ampm);

//let Cdate=(now.getMonth()+1+" "+now.getDate()+ " "+now.getFullYear())
//Console.log(Cdate)
console.log(now.getMonth()+1+"/"+now.getDate()+ "/"+now.getFullYear())
console.log(now.getMonth()+1+"-"+now.getDate()+ "-"+now.getFullYear())

