const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const User = sequelize.define('userlist', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING
        // allowNull: false
    },
    password: {
        type: DataTypes.STRING
        // allowNull: false
    },
    email: {
        type: DataTypes.STRING
        // allowNull: false
    }
})

User.sync({alter:true});
module.exports = User;