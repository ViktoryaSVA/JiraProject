const argv = require('optimist').argv;
const db = argv.db;
const userDB = argv.userDB;
const passwordDB = argv.passwordDB;
const Sequelize = require('sequelize');
const sequelize = new Sequelize(db,userDB,passwordDB,{
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
    },
    boardName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    boardID: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

module.exports = {
    User
}
