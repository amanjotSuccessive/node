/*
var http = require('http');
var fs = require('fs');

function onRequest(req, res) {
	res.writeHead(200, { 'Content-Type': 'text/html' });
	fs.readFile('./index.html', null, function (error, data) {
		if (error) {
			res.writeHead(404);
			res.write('File not found');
		} else {
		res.write(data);
            console.log("running");
		}
		res.end();
    });
}
http.createServer(onRequest).listen(3000);
*/
let http = require('http');
let fs = require('fs');
let path = require('path');
let url = require('url');
const querystring = require('querystring');

http.createServer(function(req, res){

    if(req.url === "/"){
        fs.readFile("./cv/index.html", "UTF-8", function(err, html){
		res.writeHead(200, {"Content-Type": "text/html"});
		console.log(1,req.url);
                res.end(html);
        });
  /*  }else if(req.url.match("\.css$")){
        let cssPath = path.join(__dirname, 'cv', req.url);
        let fileStream = fs.createReadStream(cssPath, "UTF-8");
        res.writeHead(200, {"Content-Type": "text/css"});
        fileStream.pipe(res);
*/
    }else if(req.url("\.jpg$")){
        let imagePath = path.join(__dirname, 'cv', req.url);
        let fileStream = fs.createReadStream(imagePath);
        res.writeHead(200, {"Content-Type": "image/jpg"});
	  fileStream.pipe(res);
	  console.log("jpg",req.url);
	  
    }
 else if (req.url.match(/^\/https\/.+/)) {
	var match = req.url.match(/^\/https\/.+/)
	match = match[0];
    console.log(match); 

} else if (req.method === "GET") {
	res.writeHead(200, { "Content-Type": "text/html" });
	fs.createReadStream("./cv/index.html", "UTF-8").pipe(res);
} 
    else{
        res.writeHead(404, {"Content-Type": "text/html"});
        res.end("No Page Found");
    }
    //...................................
    //...................................
}).listen(3000);
//var q = querystring.parse('year=2017&month=february');
//console.log(q.year);
