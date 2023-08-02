const express = require('express')

// app creation
const app = express()

// Routing
app.get('/', function(req,res) {
    res.json({msg: 'Hello Express'})
}) 

app.get('/about-us', function(req,res) {
    res.send('Info About us')
})


// Port Definition
const port = 3000;
app.listen(port, () => {
    console.log(`Server is working on ${port}`)
});

