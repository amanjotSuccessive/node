let express = require('express');
let app = express();
let fs = require('fs');

app.get('/', function (req, res) {
    res.send("Hello")
});
app.get('/data', (req, res) => { 
    fs.readFile("data/data.js", "utf8", function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});
app.get('/data/:_id', (req, res) => {
    fs.readFile("data/data.js", "utf8", function (err, data) {
        
        if (err) throw err;
        obj = JSON.parse(data);
        let id = req.params._id;
       // obj.forEach(element => { if()});
                      //values
       res.send(Object.keys(obj[parseInt(req.params._id)])[1]);
       // res.send(obj[parseInt(req.params._id)],Object.keys(obj[parseInt(req.params._id)]));
    });
  
    //  res.send(req.params)
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app;
/* let express = require('express');
let app = express();
const { getUsers } = require('./data/data')

app.get('/', function (req, res) {
    res.send("Hello")
});
app.get('/data', (req, res) => { 
    fs.readFile("data/data.json", "utf8", function (err, data) {
        if (err) throw err;
        res.send(data);
    });
});
app.get('/data/:_id', (req, res) => {
    res.status(200).send(getUsers());

  
    //  res.send(req.params)
});


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
module.exports = app; */
//


//const users = [
    /* /*
const getUserById = (userId) => {

}

const getUsers = () => {
  return users;
}

module.exports = {
  getUserById,
  getUsers
}
*/