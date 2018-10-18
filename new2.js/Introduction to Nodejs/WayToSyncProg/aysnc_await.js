const fetchUserUrl = 'https://jsonplaceholder.typicode.com/todos?completed=true';
//const response = require('response');
const axios= require('axios');
async function fetchUser() {
   // let response = await axios.get(fetchUserUrl)
    let user = await axios.get(fetchUserUrl)
    console.log(user.data);
 }
 
 fetchUser();
 