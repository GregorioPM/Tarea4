const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/config");

const Cargo = require("./cargo");
const TipoDocumento = require("./tipoDocumento");

const Empleado = sequelize.define(
    "empleados", {
        empl_documento: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        tido_id: {
            type: DataTypes.INTEGER,
            references: {
                model: TipoDocumento,
                key: "tido_id",
            },
            allowNull: false,
        },
        empl_nombres: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        carg_id: {
            type: DataTypes.INTEGER,
            references: {
                model: Cargo,
                key: "carg_id",
            },
            allowNull: false,
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);

Cargo.hasMany(Empleado, { foreignKey: 'carg_id' })
Empleado.belongsTo(Cargo, { foreignKey: 'carg_id' })

TipoDocumento.hasMany(Empleado, { foreignKey: 'tido_id' })
Empleado.belongsTo(TipoDocumento, { foreignKey: 'tido_id' })

module.exports = Empleado;