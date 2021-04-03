const Sequelize = require('sequelize');
const sequelize = new Sequelize("jiraDB","root","SVAroot16",{
    dialect: "mysql",
    host: "localhost",
    define: {
        freezeTableName: true,
        timestamps: false

    }
});

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
    },
    assigneeID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    summary: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    summaryID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    summaryStatus: {
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
