let number_of_testcase = parseInt(prompt("Enter the number of number of testcases"));
console.log(number_of_testcase);

let testcase =[]
let tempo;
for(let i=0;i<number_of_testcase;i++)
{   tempo= prompt("Enter the testcase");
    testcase[i]=tempo.toLowerCase();
    console.log(testcase[i]);
}


for(let i=0;i<number_of_testcase;i++)
{ 
let str=testcase[i];
let res = str.split("");
res=res.sort();
//console.log(res)
let sett = new Set(res);
//console.log(sett)
res = Array.from(sett);
//console.log(res)
let sum= 2847
for(let i=0; i<res.length;i++){
  if (res[i]==" ") continue;
  sum=sum-res[i].codePointAt();
  //console.log(sum,res[i].codePointAt())
}
if(sum==0) console.log("pangram")
else console.log("not pangram")
}