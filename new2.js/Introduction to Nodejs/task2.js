// Create a 3 files with some dummy content and
// write the data of all three file into dest.txt file using "pipe"

const fs = require('fs');

let readableStream1 = fs.createReadStream('text1.txt');
let readableStream2 = fs.createReadStream('text2.txt');
let readableStream3 = fs.createReadStream('text3.txt');

let writeableStream = fs.createWriteStream('dest.txt');

readableStream1.pipe(writeableStream);
readableStream2.pipe(writeableStream);
readableStream3.pipe(writeableStream);

fs.readFileSync('dest.txt',(err,data)=>{


    if(err) return console.error(err);
console.log(data.toString());
});



