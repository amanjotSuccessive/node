const fs = require('fs');
const Buffer = require('buffer').Buffer;
/*
fs.writeFile('text.txt', 'Simple things should be simple, complex things should be POSSIBLE',
    function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully");
    });
*/
let data = fs.readFileSync('./text.txt');
let stringData = data.toString();
console.log(stringData);
let chunk = '';

for (let i = 0; i < stringData.length; i++) {
    chunk += stringData[i];
    //console.log(i,stringData[i])
    if ((stringData[i] == ' ') || (i == stringData.length - 1)) {
        const buf2 = Buffer.from(chunk);
        console.log(buf2.toString());
        chunk = '';
    }
}


//var myJSON = JSON.stringify(data);
//console.log(myJSON);