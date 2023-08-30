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
    await check('email').isEmail().withMessage("El email debe ser una direccion email válida").run(req)
    await check('password').isLength({min:6, max:255}).withMessage("La contraseña debe tener minimo 6 y maximo 255 caracteres").run(req)
    await check('repetir_password').equals(req.body.password).withMessage("Las contraseñas no son iguales").run(req)
    let resultado = validationResult(req)

    // verificar que resultado esté vacio
    if (!resultado.isEmpty()) {
        return res.render('auth/register', {
        authenticated: false,
        pagina : "Crear cuenta",
        errores : resultado.array(),
        usuario : {nombre: req.body.nombre,
                   email : req.body.email,
                }
    })

    }

    // Verificar que el usuario no esté duplicado
    const existeUsuario = await Usuario.findOne( { where : {email : req.body.email}})
    if (existeUsuario) {
        return res.render('auth/register', {
            authenticated: false,
            pagina : "Crear cuenta",
            errores : [{msg: "Este usuario ya está registrado"}],
            usuario : {nombre: req.body.nombre,
                       email : req.body.email,
                    }
        })
    }

    await Usuario.create({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
        token:123
    })
   
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