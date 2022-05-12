const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/config');

const Cargo = sequelize.define(
    "cargos", {
        carg_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        carg_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = Cargo;