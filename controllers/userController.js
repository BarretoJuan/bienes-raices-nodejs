
const loginForm = (req,res) => {
    res.render('auth/login', {
        authenticated: true,
        pagina : "Inicia Sesión"
    })
}

const registerForm = (req,res) => {
    res.render('auth/register', {
        authenticated: false,
        pagina : "Crear cuenta"
    })
}

const forgotPasswordForm = (req,res) => {
    res.render('auth/forgotPassword', {
        pagina : "Recupera tu cuenta de Bienes Raíces"
    })
}

export {
    loginForm,
    registerForm,
    forgotPasswordForm
}