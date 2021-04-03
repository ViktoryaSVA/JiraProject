const mysqlClient = require("./mysql_backend");

let buf1 = [];
let buf = [];
let buf2 = [];
let status1 = 0; //10002
let status2 = 0; //10001
let status3 = 0; //3
let status4 = 0; //10000
let resultStatus1 = 0;
let resultStatus2 = 0;
let resultStatus3 = 0;
let resultStatus4 = 0;
let obj = {};
let li = 0;

async function GetData() {
    let statusArray = [10002,10001,3,1000];
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
        let z = {name: i.rows[0].assignee, count:i.count}
        return z
    })
   return Array
}
module.exports = {
    GetData:GetData
}

// GetData()
// function GetD(){
//     // Get Users
//     mysqlClient.User.findAll({raw: true}).then(users => {
//         console.table(users)
//         for (const i in users) {
//             let assigne = users[i].assignee;
//             buf1.push(assigne);
//         }
//         let AssigneeArray = new Set(buf1);
//         let newAssigneeArray = Array.from(AssigneeArray);
//         for (const j in newAssigneeArray){
//             obj[newAssigneeArray[j]] = new Array();
//             buf.push(newAssigneeArray[j]);
//             for (const search in users){
//                  if (users[search].assignee == newAssigneeArray[j]){
//                     obj[newAssigneeArray[j]].push(users[search].summaryID);
//                 }
//             }
//         }
//         const values = Object.values(obj);
//         const keys = Object.keys(obj);
//         let lengthCount = Object.keys(obj).length;
//         for(const count in values){
//             for (const h in values[count] ){
//                 if (values[count][h] == 10002  && keys[count] == buf[li]  ){
//                     status1 += 1
//                 }
//                 else if (values[count][h] == 10001 && keys[count] == buf[li]  ){
//                     status2 += 1
//                 }
//                 else if (values[count][h] == 3 && keys[count] == buf[li]  ){
//                     status3 += 1
//                 }
//                 else if (values[count][h] == 10000 && keys[count] == buf[li] ){
//                     status4 += 1
//                 }
//             }
//             console.log(status1, ' ',status2, ' ',status3, ' ',status4, ' ' );
//             li += 1;
//
//             buf2.push(status1,status2,status3,status4);
//
//         }
//
//         console.log(obj);
//         // console.log(buf2);
//         // console.log(buf);
//         // console.log(newAssigneeArray);
//         // console.log(status1, ' ',status2, ' ',status3, ' ',status4, ' ' );
//         // console.log(values);
//         // for (const i in users) {
//         //     let assigne = users[i].assignee;
//         //     let summ = users[i].summaryID;
//         //     // buf1.push(assigne);
//         //     TableArray.push(summ,assigne)
//         // }
//         // console.log(TableArray);
//
//         // let AssigneeArray = new Set(TableArray);
//         // console.log(AssigneeArray);
//
//     }).catch(err => console.log(err));
//     // Get Tasks
//     // mysqlClient.Task.findAll({raw: true}).then(tasks => {
//     //     // console.log(tasks);
//     //
//     //     for (const i in tasks) {
//     //         let status = tasks[i].status;
//     //         buf.push(status);
//     //     }
//     //     console.log(buf);
//     //     for (const i in buf){
//     //         if (buf[i] == "Done"){
//     //             status1.push(buf[i]);
//     //         }
//     //         else if (buf[i] == "Selected for Development"){
//     //             status2.push(buf[i]);
//     //         }
//     //         else if (buf[i] == "In Progress"){
//     //             status3.push(buf[i]);
//     //         }
//     //         else if (buf[i] == "Backlog"){
//     //             status4.push(buf[i]);
//     //         }
//     //     }
//     //     resultStatus1 = status1.length;
//     //     resultStatus2 = status2.length;
//     //     resultStatus3 = status3.length;
//     //     resultStatus4 = status4.length;
//     //     resultStatus = [`${resultStatus1}`,`${resultStatus2}`,`${resultStatus3}`,`${resultStatus4}`]
//     //     // resultStatus = [resultStatus1,resultStatus2,resultStatus3,resultStatus4]
//     //     // console.log(resultStatus1);
//     //     // console.log(resultStatus2);
//     //     // console.log(resultStatus3);
//     //     // console.log(resultStatus4);
//     //     console.log(resultStatus);
//     //     // console.log(status1);
//     //
//     // }).catch(err => console.log(err));
//
//     module.exports ={
//         buf,
//         buf2
//     }
//
//
//
// }
//
// GetD();
//
