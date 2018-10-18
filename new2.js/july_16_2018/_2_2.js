let number_of_testCase = parseInt(prompt("Enter the number of number of testCases"));
console.log(number_of_testCase);

let testCase = []
for (let i = 0; i < number_of_testCase; i++) {
  testCase[i] = prompt("Enter the testCase");
  console.log(testCase[i], testCase[i].length);
}

for (let i = 0; i < number_of_testCase; i++) { //console.log("outer");
  let counter = 0;
  let first_index = 0;
  let second_index = 1;
  for (let c = 0; c < testCase[i].length - 1; c++) {
    //console.log(i,testCase[i].charAt(first_index),testCase[i].charAt(second_index),counter);

    if (testCase[i].charAt(first_index) == testCase[i].charAt(second_index)) {
      first_index++;
      second_index++;
      counter++;
    } else {
      first_index++;
      second_index++;

    }
    /*
    if(testCase[first_index]!=testCase[second_index]){
      first_index=second_index;
      second_index++;
    }*/

  }
  console.log(counter);
}