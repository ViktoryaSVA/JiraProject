const mysqlClient = require("./mysql_backend");
// Get Users
mysqlClient.User.findAll({raw:true}).then(users => {
    console.table(users);
}).catch(err => console.log(err));


// Get Tasks
mysqlClient.Task.findAll({raw:true}).then(tasks => {
    console.table(tasks);
}).catch(err => console.log(err));

