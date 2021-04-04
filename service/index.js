const argv = require('optimist').argv;
const login = argv.login;
const password = argv.password;
const fetch = require('node-fetch');
const mysqlClient = require("./mysql_backend");

function getBoard(key){
    const bodyData = `{
      "expand": [
        "names",
        "schema",
        "operations"
      ],
      "jql": "project = ${key}",
      "maxResults": 15,
      "fieldsByKeys": false,
      "fields": [
        "summary",
        "status",
        "assignee"
      ],
      "startAt": 0
    }`;
    fetch('https://testsva.atlassian.net/rest/api/3/search', {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${Buffer.from(
                `${login}:${password}`
            ).toString('base64')}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyData
    })
        .then(response => {
            console.log(
                `Response: ${response.status} ${response.statusText}`
            );
            return response.text();
        })
        .then(text => {
            let newText = JSON.parse(text);
            // console.log(newText.issues)
            let Fields = newText.issues;
            for (const itemFields of Fields) {
                // console.log(itemFields.fields);
                let Assignee = itemFields.fields.assignee;
                let AssigneeID = itemFields.fields.assignee.accountId;
                let Status = itemFields.fields.status.name;
                let StatusID = itemFields.fields.status.id;
                let Summary = itemFields.fields.summary;
                let AssigneeData = Assignee.displayName;
                let BoardId = itemFields.id;
                // Start function for adding data
                AddToDB(AssigneeData, AssigneeID, Status, Summary, StatusID, key, BoardId)
            };
        })
        .catch(err => console.error(err));

}
module.exports = {
    getBoard
}
function AddToDB(AssigneeData,AssigneeID, Status, Summary,StatusID,key,BoardId ) {
    //Add Data to User
    mysqlClient.User.destroy({
        where: {
            boardName:key
        },
        truncate: true
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));

    mysqlClient.User.create({
        assignee: AssigneeData,
        assigneeID: AssigneeID,
        summary: Summary,
        summaryID: StatusID,
        summaryStatus: Status,
        boardName:key ,
        boardID:BoardId,
        created_at: new Date().getTime()
    }).then(res => {
        console.log(res);
    }).catch(err => console.log(err));


}
