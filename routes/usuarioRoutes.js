import express from "express";

const router = express.Router();

// Routing
router.get('/login', (req, res) => {
    res.render('auth/login', {
        authenticated: false
    })
});

router.get('/about-us', function(req,res) {
    res.send('Info About us')
});

export default router

