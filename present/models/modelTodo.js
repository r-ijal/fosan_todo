const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const User = require('./modelUser')

const Todo = sequelize.define('todolist', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    kegiatan: {
        type: DataTypes.STRING
        // allowNull: false
    },
    status : {
        type: DataTypes.STRING,
        defaultValue: 0
        // allowNull: false
    }
});

Todo.belongsTo(User);
User.hasMany(Todo);

Todo.sync({alter:true});
module.exports = Todo;