// assuming data is sorted by year 
// Not Completed WORK IN PROGRESS
rawData=[
	{ year: 2016, type: "Facebook"  , newUsers: 3000 },
	{ year: 2016, type: "Twitter"   , newUsers: 2000 },
	{ year: 2016, type: "Instagram" , newUsers: 2500 },
	{ year: 2017, type: "Facebook"  , newUsers: 2300 },
	{ year: 2017, type: "Twitter"   , newUsers: 2500 },
	{ year: 2017, type: "Instagram" , newUsers: 2800 },
	{ year: 2018, type: "Facebook " , newUsers: 2000 },
	{ year: 2018, type: "Twitter"   , newUsers: 2200 },
	{ year: 2018, type: "Instagram" , newUsers: 2500 },
    ]
console.log(rawData.length);
rawData.forEach(function(element) {
  console.log(element);
});
console.log(".............................")

console.log(rawData[0].type)
let flag = 0;
for(let i=0 ;i<rawData.length;i++)
{
  if(i==0){ total= rawData[0].newUsers;}
  else
  if(rawData[i].year==rawData[i-1].year)
    { total += rawData[i].newUsers;  } 
  else 
  if (rawData[i].year!=rawData[i-1].year)
  { flag=i;
    printData(flag,i,total);
    total = 0;
  }
   
}
function printData(flag,i){
console.log(`
&{rawData[flag].year} :{
total: ${total}
values: [
`);     
for(let k=flag;k<=i;k++ )
{
console.log(`{type:${rawData[k].type}`)   }
}


