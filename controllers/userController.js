
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

export {
    loginForm,
    registerForm
}