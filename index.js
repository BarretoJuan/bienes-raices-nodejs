
// ECMAScript Modules Imports
import express from 'express';
import usuarioRoutes from './routes/usuarioRoutes.js'

// CommonJS Imports
// const express = require('express');

// app creation
const app = express();

// Implementing PUG template engine
app.set('view engine', 'pug')
app.set('views', './views')

//Routing
app.use('/auth', usuarioRoutes)

// Port Definition
const port = 3000;
app.listen(port, () => {
    console.log(`Server is working on ${port}`)
});

