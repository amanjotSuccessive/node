let number_of_rocks = parseInt(prompt("Enter the number of number of ROCKS"));
console.log(number_of_rocks);

let elements =[]
let tempo;
for(let i=0;i<number_of_rocks;i++)
{   tempo= prompt("elements in rocks").toLowerCase();
    //console.log(1,tempo)
    split_arry=tempo.split("");
    //console.log(2,split_arry)
    split_arry=split_arry.sort();
    //console.log(3,split_arry)
    let arr_to_set= new Set(split_arry)
    //console.log(4,arr_to_set)
    split_arry=Array.from(arr_to_set)
    //console.log(5,split_arry)
    elements[i]=split_arry.sort()
    
}
console.log(elements)
//let final_arr =[]
let  arr=[]
for(let i=0;i<elements.length;i++)
{
  for(let j=0;j<elements.length[i];j++)
  {
    arr[i+j]=elements[i][j]
  }
}
console.log(arr)
//............problem in finding 
/*sort
for(let i=0;i<number_of_rocks-1;i++)
{
if(elements[i].length>elements[i].length)
{
  let     temp=elements[i];
   elements[i]=elements[i+1];
   elements[i+1]= temp;
}
}
let mergeList=""
for(let i=0;i<number_of_rocks;i++)
{ 
  mergeList=mergeList.concat(elements[i]); 
//mergeList+=elements[i].toString()
}

console.log(6,mergeList)
mergeList=""
let temp_merge=mergeList.split(",")
console.log(8,temp_merge)
for(let i=0;i<temp_merge.length;i++)
{ 
  mergeList=mergeList+(temp_merge[i]); 
//mergeList+=elements[i].toString()
}
console.log(7,mergeList)
*/