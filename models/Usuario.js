import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js"

const Usuario = db.define('usuarios', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allownull:false
    },
    password: {
        type: DataTypes.STRING,
        allownull:false
    },
    token: {
        type: DataTypes.String
    },
    confirmado: DataTypes.BOOLEAN
});

export default Usuario;