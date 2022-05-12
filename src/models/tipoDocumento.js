const { DataTypes } = require("sequelize");
const { sequelize } = require('../database/config');

const TipoDocumento = sequelize.define(
    "tipo_documentos", {
        tido_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tido_codigo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        tido_nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

module.exports = TipoDocumento;