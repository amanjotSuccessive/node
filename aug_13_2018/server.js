let newObject = 6;
let express = require('express');
let app = express();
// const {getUsers, getUserById, addNewUser ,users } = require('./data/data')
const AddNewUser = require('./data/data') //import class AddNewUser

app.get('/', function (req, res) {
    res.send("Hello")
});
app.get('/data', (req, res) => {
    let temp = AddNewUser.getUsers()
 //   console.log(temp);
    res.status(200).send(temp)

});


app.get('/data/:_id', (req, res) => {
   res.status(200).send(AddNewUser.getUserById(parseInt(req.params._id-1)));
});

app.post('/data/post',(req,res) => {
    AddNewUser.addNewUser(newObject,"new object",true);
    let temp = AddNewUser.getUsers();
  //  console.log(temp);
    res.status(200).send(temp);
    newObject++;
});
 
//app.put('/data/put',req,res) => {}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}!`));
