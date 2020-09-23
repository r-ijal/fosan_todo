const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

const User = sequelize.define('userlist', {
    
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    }
})

User.sync({alter:true});
module.exports = User;