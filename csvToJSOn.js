const csvFilePath = './csvToJSOn.csv';
//const csvFilePath = './empty.csv';
const csv = require('csvtojson')
let arr = [];
csv()
    .fromFile(csvFilePath)
    .then((jsonObj)=>{
        arr = [...jsonObj];
        console.log(arr);

        // arr.push(1);
    // arr.push(jsonObj); pushing array inside a array;
    // jsonObj.forEach((obj)=> arr.push(obj)); why to use map?
    })
console.log('sadssa');

/*         arr = {
            kill: 2
        };
        let arr1 = arr;
        arr1 = {
            kill: 3
        };
        console.log(arr);
        console.log(arr1);

        // arr.push(1);
    // arr.push(jsonObj);
    // jsonObj.forEach((obj)=> arr.push(obj));
    });
console.log('sadssa'); */