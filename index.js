
// ECMAScript Modules Imports
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js'
import db from './config/db.js'

// CommonJS Imports
// const express = require('express');

// app creation
const app = express();


// Form declaration
app.use(express.urlencoded({extended:true}));
// Connection to database
try {
    await db.authenticate();
    db.sync();
    console.log("Conexión correcta a la base de datos")

} catch (error) {
    console.log(error)
}

// Implementing PUG template engine
app.set('view engine', 'pug')
app.set('views', './views')

// Static directory
app.use(express.static('public'))

//Routing
app.use('/auth', usuarioRoutes)

// Port Definition
const port = 3000;
app.listen(port, () => {
    console.log(`Server is working on ${port}`)
});

