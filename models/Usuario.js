import { DataTypes, Sequelize } from "sequelize";
import db from "../config/db.js"
import bcrypt from "bcrypt"

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
        type: DataTypes.STRING
    }
    // confirmado: {
    //     type: DataTypes.BOOLEAN
    // },
}, {
    hooks: {
        beforeCreate: async function(usuario) {
            const salt = await bcrypt.genSalt(10)
            usuario.password = await bcrypt.hash(usuario.password, salt);
        }
    }
});

export default Usuario;