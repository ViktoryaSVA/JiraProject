const argv = require('optimist').argv;
let login = argv.login;
let password = argv.password;
const fetch = require('node-fetch');
const mysqlClient = require("./mysql_backend");
const bodyData = `{
  "expand": [
    "names",
    "schema",
    "operations"
  ],
  "jql": "project = SVAP",
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
    // k7DOYaS3Ry9JKi6bhDdy229D
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
            newText = JSON.parse(text);
            // console.log(newText.issues)
            let Fields = newText.issues;
            for (const itemFields of Fields) {
                //console.log(itemFields.fields);

                let Assignee = itemFields.fields.assignee;
                //console.log(Assignee);

                // mysqlClient.User.create({
                //     assignee: Assignee.displayName
                // }).then(res => {
                //     console.log(res);
                // }).catch(err => console.log(err));

                // mysqlClient.Task.create({
                //     status: itemFields.fields.status.name,
                //     summary: itemFields.fields.summary
                // }).then(res => {
                //     console.log(res);
                // }).catch(err => console.log(err));

            };
        })
    .catch(err => console.error(err));

