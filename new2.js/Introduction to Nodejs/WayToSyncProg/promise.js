const fetchUserUrl = 'https://jsonplaceholder.typicode.com/todos?completed=true';

const axios= require('axios');
const fetchUser = () => {
    axios.get(fetchUserUrl)
   // .then below runs when the remote server responds
  // .then(response => userDetail(response.data))
   .then(response => { console.log('user: ', response.data) })
   .catch(err => console.log("Error :- ", err)) 
}
//let userDetail = (users) => axios.get(`${fetchUserUrl}`)
fetchUser();