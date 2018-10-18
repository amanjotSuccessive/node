class AddNewUser {
 constructor() {
   this.users = [
     {
        "_id": 1,
        "title": "et temp",
        "completed": true
      },
      {
        "_id": 2,
        "title": "quo quam ut ab",
        "completed": true
      },
      {
        "_id": 3,
        "title": "est quia aut",
        "completed": true
      },
      {
        "_id": 4,
        "title": "ero dolor",
        "completed": true
      },
      {
        "_id": 5,
        "title": "fugit nisi",
        "completed": true
      }
    ];
  }

  getUserById(userId) {
    return this.users[userId];
  }

  getUsers() {
    return this.users;
  }

  addNewUser(id,title,status) {
    this.users.push({
      _id: id,
      title: title,
      completed: status,
    });
  }
}

module.exports = new AddNewUser();
