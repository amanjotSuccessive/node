//Create a big file (~200MB) and read data using streams and 
//send it in node' server response.


var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
const querystring = require('querystring');
const file = fs.createWriteStream('./big.txt');

// Use this module to create file  
/*
for(let i=0; i<= 1e6; i++) {
 file.write('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n'
     );
}
file.end();

//*/


http.createServer(function (req, res) {

    if (true) {
        res.writeHead(200, {
            "Content-Type": "text/plain"
        });
        fs.createReadStream("./big.txt", "UTF-8").pipe(res);
    } else {
        res.writeHead(404, {
            "Content-Type": "text/plain"
        });
        res.end("No Page Found");
    }
}).listen(3000);