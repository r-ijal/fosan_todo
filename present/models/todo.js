const { DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const User = require('./user')

const Todo = sequelize.define('todolist', {

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    kegiatan: {
        type: DataTypes.STRING

    },
    status : {
        type: DataTypes.STRING

    }
});

Todo.belongsTo(User);
User.hasMany(Todo);

Todo.sync({alter:true});
module.exports = Todo;