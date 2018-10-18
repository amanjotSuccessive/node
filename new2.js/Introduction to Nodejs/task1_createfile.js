const fs = require('fs');
fs.writeFile('text3.txt', 'Linux Ubuntu Bottle Milton LG Electronics',
    function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Data written successfully");
    });