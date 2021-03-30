const mysqlClient = require("./mysql_backend");

// Get Users
    mysqlClient.User.findAll({raw: true}).then(users => {
        console.table(users);
    }).catch(err => console.log(err));

// Get Tasks
    let summOfDone = 0
    mysqlClient.Task.findAll({
        where: {
            status: 'Done'
        }
    }).then(tasks => {
        for (const i in tasks) {
            summOfDone += 1;
        }
        console.log("Status 1 =", summOfDone);

        // console.log(tasks);
    }).catch(err => console.log(err));

    let summOfSelectedforDevelopment = 0
    mysqlClient.Task.findAll({
        where: {
            status: 'Selected for Development'
        }
    }).then(tasks => {
        for (const i in tasks) {
            summOfSelectedforDevelopment += 1;
        }
        console.log("Status 2 =", summOfSelectedforDevelopment);

    }).catch(err => console.log(err));

    let summInProgress = 0
    mysqlClient.Task.findAll({
        where: {
            status: 'In Progress'
        }
    }).then(tasks => {
        for (const i in tasks) {
            summInProgress += 1;
        }
        console.log("Status 3 =", summInProgress);
    }).catch(err => console.log(err));

    let summBacklog = 0
    mysqlClient.Task.findAll({
        where: {
            status: 'Backlog'
        }
    }).then(tasks => {
        for (const i in tasks) {
            summInProgress += 1;
        }
        console.log("Status 4 =", summBacklog);
    }).catch(err => console.log(err));
