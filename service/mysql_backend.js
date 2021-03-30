const Sequelize = require('sequelize');
const sequelize = new Sequelize("jiraDB","root","SVAroot16",{
    dialect: "mysql",
    host: "localhost",
    define: {
        freezeTableName: true,
        timestamps: false

    }
});
const ShowData = sequelize.query("SELECT * FROM users", function (rows) {
   console.log(JSON.stringify(rows));
})

console.log(ShowData) ;


const User = sequelize.define("users",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    assignee: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

const Task = sequelize.define("task",{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    status: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    summary: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});
module.exports = {
    User,
    Task
}
