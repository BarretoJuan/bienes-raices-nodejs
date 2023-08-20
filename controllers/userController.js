import { check, validationResult, ExpressValidator } from "express-validator";
import Usuario from "../models/Usuario.js"

const loginForm = (req,res) => {
    res.render('auth/login', {
        authenticated: true,
        pagina : "Inicia Sesión"
    })
};

const loginAction = (req,res) => {
    console.log("Iniciando sesion")
};

const registerForm = (req,res) => {
    res.render('auth/register', {
        authenticated: false,
        pagina : "Crear cuenta"
    })
};

const registerAction = async (req,res) => {
    await check('nombre').notEmpty().withMessage("El nombre no puede estar vacío").run(req)
    let resultado = validationResult(req)
    res.json(resultado.array())
    const usuario = await Usuario.create(req.body)
    res.json(usuario)

};



const forgotPasswordForm = (req,res) => {
    res.render('auth/forgotPassword', {
        pagina : "Recupera tu cuenta de Bienes Raíces"
    })
};

const forgotPasswordAction = (req,res) => {
    console.log("recuperando contraseña")
}

export {
    loginForm,
    registerForm,
    forgotPasswordForm,
    registerAction,
    loginAction,
    forgotPasswordAction
}