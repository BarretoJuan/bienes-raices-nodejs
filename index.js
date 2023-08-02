const express = require('express')

const app = express()


app.get("/", function(req,res) {
    res.send("Hola Mundo en Express")
})


// Definir puerto

const port = 3000;
app.listen(port, () => {
    console.log("El server está funcionando en el puerto ${port}")
});

