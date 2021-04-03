const mysqlClient = require("./mysql_backend");

async function GetData() {
    let Array = [];
    let users = await mysqlClient.User.findAll({
        group: ['assigneeID']
    })
    for (const i of users){
        let task = await mysqlClient.User.findAndCountAll({
            group: ['summaryID'],
            where:{
            assignee:i.assignee
            }})
            Array.push(task);
    }
    Array = Array.map(function (i) {
        let table = {name: i.rows[0].assignee, count:i.count}
        return table
    })
   return Array
}
module.exports = {
    GetData:GetData
}
