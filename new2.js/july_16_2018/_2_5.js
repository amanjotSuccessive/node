let arr= [[0, 1, 1, 2],[0, 5, 0, 0],[2, 0, 3, 3]]

for(let i=0;i<3;i++)
{
  for(let j=0;j<4;j++)
  {
    if (arr[i][j]==0)
    arr[i+1][j]=0
  }

}

let sum=0;
for(let i=0;i<3;i++)
{
  for(let j=0;j<4;j++)
  {
    sum+=arr[i][j]
  }

}
console.log(sum)
console.log(arr)